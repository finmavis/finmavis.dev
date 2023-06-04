import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from './global-style';
import Header from './header';
import Footer from './footer';

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
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
