import { Button, ImageGallery, Loader } from 'components';
import PT from 'prop-types';
import React, { PureComponent } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-toastify';

import { onSearch } from '../../api/api';

class ImageInfo extends PureComponent {
  state = {
    images: [],
    total: 0,
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps) {
    const { name, page } = this.props;

    if (name !== prevProps.name || page !== prevProps.page) {
      this.setState({ status: 'pending' });

      try {
        const { data } = await onSearch(name, page);

        if (data.totalHits === 0) {
          this.setState({ status: 'idle' });
          toast.error(`🥺 sorry we can't find any ${this.props.name}`);
        }

        if (name !== prevProps.name) {
          this.setState({
            images: data.hits,
            total: data.totalHits,
            status: 'resolved',
          });
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            total: data.totalHits,
            status: 'resolved',
          }));
        }

        if (data.hits.length > 0 && data.hits.length < 12) {
          toast.info(`😎 Looks like it's all ${name} we have`);
        }
      } catch (error) {
        this.setState({ error });
      }
    }

    scroll.scrollToBottom({ smooth: true });
  }
  render() {
    const { images, total, status, error } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (error) {
      return toast.error(`😭 something goes wrong please try again`);
    }

    if (status === 'resolved') {
      return (
        <div>
          <ImageGallery images={images} />
          {images.length > 0 && images.length < total && (
            <Button onClick={this.props.loadMore} />
          )}
        </div>
      );
    }
  }
}

export default ImageInfo;

ImageInfo.propTypes = {
  name: PT.string.isRequired,
  page: PT.number.isRequired,
  loadMore: PT.func,
};
