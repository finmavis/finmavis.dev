import React from 'react';
import { css } from '@emotion/core';

import Container from './container';

import FinIcon from '../assets/svg/fin.inline.svg';

export default function Hero() {
  return (
    <section
      css={css`
        padding-top: 3.5rem;
        background-image: var(--bg-hero);
        min-height: 32.5rem;
        display: block;
        text-align: center;
        position: relative;
      `}
    >
      <Container>
        <h1
          css={css`
            color: var(--color-primary);
          `}
        >
          Hello, I’m Aris Rinardi{' '}
          <span
            css={css`
              display: block;
              color: var(--color-secondary);
              font-size: 1.1rem;
              margin-top: 0.75rem;
            `}
          >
            Also known as Fin Mavis, a self-taught Frontend Developer based in
            Jakarta
          </span>
        </h1>
      </Container>
      <div
        css={css`
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          z-index: 1;
          bottom: 1rem;
          overflow: hidden;

          @media (max-width: 1016px) {
            bottom: 2.5rem;
          }

          @media (max-width: 900px) {
            bottom: 2.7rem;
          }

          @media (max-width: 600px) {
            bottom: 2.3rem;
          }

          @media (max-width: 546px) {
            bottom: 3.8rem;
          }

          @media (max-width: 481px) {
            bottom: 2.3rem;
          }

          @media (max-width: 467px) {
            bottom: 3.7rem;
          }
        `}
      >
        <FinIcon
          css={css`
            height: 18rem;
            flex: 0 0 auto;

            @media (max-width: 900px) {
              height: 16rem;
            }

            @media (max-width: 600px) {
              height: 14rem;
            }

            @media (max-width: 320px) {
              height: 12rem;
            }
          `}
        />
      </div>
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
          z-index: 2;

          @media (max-width: 600px) {
            padding: 1.15rem;
          }
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
