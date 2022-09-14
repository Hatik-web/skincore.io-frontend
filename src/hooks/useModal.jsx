import React, { useCallback, useState } from 'react';
import ModalWrapper from '../components/common/Modals';

const INITIAL_MODAL = {
  type: null,
  isVisible: false
};

const useModalState = () => {
  const [modal, setModal] = useState(INITIAL_MODAL);

  const openModal = (type) => {
    setModal({ type, isVisible: true });
  };

  const closeModal = () => {
    setModal(INITIAL_MODAL);
  };

  const Modal = useCallback(
    // eslint-disable-next-line react/jsx-props-no-spreading
    (props) => <ModalWrapper type={modal.type} closeModal={closeModal} {...props} />,
    [modal.isVisible]
  );

  return { Modal, openModal, closeModal };
};

export default useModalState;
