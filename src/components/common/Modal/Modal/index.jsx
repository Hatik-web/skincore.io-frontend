import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Modal(props) {
  const { children, onCancel } = props;

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="w-modal" onClick={() => onCancel()}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

Modal.defaultProps = {
  size: 'xxl',
  color: 'dark'
};

Modal.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types,react/require-default-props
  isOpen: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl', 'xxl']),
  // eslint-disable-next-line react/no-unused-prop-types
  color: PropTypes.oneOf(['dark', 'blue', 'red', 'green', 'yellow', 'purple', 'dark-green'])
};

export default Modal;
