import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from './global-style';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
