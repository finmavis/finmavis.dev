import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';

import Header from './header';

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
          }

          body {
            color: var(--color-secondary);
            background-color: var(--bg-color);
            position: relative;
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
          }

          .dark-mode {
            --color-primary: var(--ivory);
            --color-secondary: var(--ash);
            --bg-color: var(--night);
            --bg-hero: linear-gradient(to bottom, #2b2a2a 65%, #393939 106%);
            --bg-current-work: var(--ship-gray);
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
