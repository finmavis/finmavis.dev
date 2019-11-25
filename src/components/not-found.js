import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import NotFoundIcon from '../assets/svg/not-found.inline.svg';

export default function NotFound() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: calc(100vh - 4rem);
        color: var(--color-primary);
        font-size: 1.3rem;
      `}
    >
      <NotFoundIcon
        css={css`
          fill: var(--color-primary);
        `}
      />
      <p>Oops..Page Not Found</p>
      <Link
        to='/'
        css={css`
          padding: 0.35rem 1.75rem;
          border-radius: 10rem;
          box-shadow: 0 3px 10px 2px rgba(56, 183, 233, 0.5);
          background-image: linear-gradient(to bottom, #00c3ff 0%, #40b5e5 93%);
          color: var(--color-primary);
          font-size: 1rem;
          transition: all 0.3s ease;

          &:hover,
          &:focus {
            opacity: 0.75;
            background-image: linear-gradient(
              to bottom,
              #00c3ff 0%,
              #40b5e5 93%
            );
          }
        `}
      >
        Go back home
      </Link>
    </div>
  );
}
