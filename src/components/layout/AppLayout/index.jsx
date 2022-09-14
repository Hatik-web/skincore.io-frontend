import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../complex/Header';
import Footer from '../../complex/Footer';

function Component({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

Component.propTypes = {
  children: PropTypes.node.isRequired
};

export default Component;
