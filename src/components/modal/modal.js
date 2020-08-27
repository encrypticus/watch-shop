import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ children, hideModal }) => {
  const modalRef = useRef(null);

  const hideModalHandler = (event) => {
    const modal = modalRef.current;
    if (event.target === modal) hideModal();
  };

  return (
    <div className='modal' ref={modalRef} onClick={hideModalHandler}>
      <div className='modal__content animate'>
        <button className='modal__close' type='button' onClick={hideModal}>x</button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func.isRequired,
};

export default Modal;
