import { ImageGalleryList, Modal } from 'components';
import PT from 'prop-types';
import React, { PureComponent } from 'react';

import { ImageLarge } from './ImageGallery.styled';

class ImageGallery extends PureComponent {
  state = {
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  toggleModal = (largeImageURL, tags) => {
    return this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL,
      tags,
    }));
  };

  render() {
    const { largeImageURL, tags } = this.state;
    return (
      <>
        <ImageGalleryList
          images={this.props.images}
          toggleModal={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <ImageLarge src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PT.array.isRequired,
  largeImg: PT.string,
  tags: PT.string,
};
