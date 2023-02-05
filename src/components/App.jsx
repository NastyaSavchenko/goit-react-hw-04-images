import 'react-toastify/dist/ReactToastify.css';

import { ImageInfo, Searchbar } from 'components';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';

import { AppStyled } from './App.styled';

export class App extends PureComponent {
  state = {
    name: '',
    page: 0,
  };

  handelSubmit = name => {
    if (this.state.name !== name) {
      this.setState({ name, page: 1 });
    }
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { name, page } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handelSubmit} />
        <ImageInfo name={name} page={page} loadMore={this.onLoadMoreClick} />
        <ToastContainer autoClose={2000} />
      </AppStyled>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  // page: PropTypes.number.isRequired,
};
