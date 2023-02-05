import PT from 'prop-types';
import React, { PureComponent } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyled, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export default class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') this.props.onClose();
  };

  onBackdropClick = event => {
    if (event.currentTarget === event.target) this.props.onClose();
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onBackdropClick}>
        <ModalStyled>{this.props.children}</ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PT.func,
  children: PT.node,
};
