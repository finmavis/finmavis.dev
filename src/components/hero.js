import React from 'react';
import { css } from '@emotion/core';

import Container from './container';

import FinIcon from '../assets/svg/fin.svg';
import FurnitureIcon from '../assets/svg/furniture.svg';

export default function Hero() {
  return (
    <section
      css={css`
        padding-top: 3.5rem;
        background-image: var(--bg-hero);
        min-height: 90vh;
        display: block;
        text-align: center;
        position: relative;
      `}
    >
      <Container>
        <h1
          css={css`
            font-family: inherit;
            color: var(--color-primary);
          `}
        >
          Hello, I’m Aris Rinardi{' '}
          <span
            css={css`
              display: block;
              color: var(--color-secondary);
              font-size: 1.2rem;
              margin-top: 0.75rem;
            `}
          >
            Also known as Fin Mavis, a self-taught Frontend Developer based in
            Jakarta
          </span>
        </h1>
        <div
          css={css`
            position: relative;
          `}
        >
          <FinIcon
            css={css`
              position: relative;
              bottom: -58px;
              width: 50%;
              max-width: 19rem;
            `}
          />
          <FurnitureIcon
            css={css`
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -8px;
              width: 100%;
              max-width: 41rem;
            `}
          />
        </div>
      </Container>
      <div
        css={css`
          background-color: var(--bg-current-work);
          color: var(--color-primary);
          padding: 1.5rem 2rem;
          position: absolute;
          bottom: -1rem;
          box-shadow: 0 5px 15px 2px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 50rem;
          left: 50%;
          transform: translateX(-50%);
        `}
      >
        <p
          css={css`
            margin-bottom: 0;
            font-family: inherit;
            font-weight: 700;
            font-size: 1rem;
          `}
        >
          I currently work at Style Theory - Southeast Asia's Largest Fashion
          Rental Subscription Platform
        </p>
      </div>
    </section>
  );
}
