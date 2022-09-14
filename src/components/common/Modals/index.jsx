import React from 'react';
import Modal from '../Modal/Modal';
import DepositModal from './DepositModal';

function ModalWrapper({ type, closeModal }) {
  const commonProps = {
    title: null,
    visible: true,
    destroyOnClose: true,
    centered: true,
    footer: null,
    onCancel: closeModal
  };

  switch (type) {
    case 'depositModal':
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Modal {...commonProps}>
          <DepositModal closeModal={closeModal} />
        </Modal>
      );

    default:
      // eslint-disable-next-line react/jsx-no-useless-fragment
      return <></>;
  }
}

export default ModalWrapper;
