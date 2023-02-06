import PT from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalStyled, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
  });

  useEffect(() => {
    window.removeEventListener('keydown', handleKeydown);
  });

  const handleKeydown = e => {
    if (e.code === 'Escape') onClose();
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) onClose();
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <ModalStyled>{children}</ModalStyled>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PT.func,
  children: PT.node,
};

export default Modal;
