import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';

import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --ash: #9ba0ad;
            --bone: #f9f9f9;
            --charcoal: #515151;
            --concrete: #f3f3f3;
            --white: #fff;
            --ivory: #fafafa;
            --night: #212121;
            --ship-gray: #3c3c3e;
            --mine-shaft: #2b2a2a;
            --cornflower-blue: #5e9bea;
            --dusty-gray: #959595;
            --border-color: #979797;
          }

          body {
            color: var(--color-secondary);
            background-color: var(--bg-color);
            position: relative;
          }

          a {
            text-shadow: none;
            background: none;
          }

          main {
            display: block;
            position: relative;
            min-height: 100vh;
            padding-bottom: 4rem;
          }

          .light-mode {
            --color-primary: var(--charcoal);
            --color-secondary: var(--ash);
            --bg-color: var(--white);
            --bg-hero: linear-gradient(
              to top,
              rgba(241, 241, 241, 0.81),
              var(--bone) 58%
            );
            --bg-current-work: var(--white);
            --bg-footer: var(--concrete);
            --bg-experience: var(--bone);
            --bg-blog-list: var(--mine-white);
          }

          .dark-mode {
            --color-primary: var(--ivory);
            --color-secondary: var(--ash);
            --bg-color: var(--night);
            --bg-hero: linear-gradient(to bottom, #2b2a2a 65%, #393939 106%);
            --bg-current-work: var(--ship-gray);
            --bg-footer: linear-gradient(to top, #2b2a2a 106%, #3c3c3e 65%);
            --bg-experience: var(--mine-shaft);
            --bg-blog-list: var(--mine-shaft);
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
