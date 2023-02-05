import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Container from './ui/container';

import FinIcon from '../shared/assets/svg/fin.inline.svg';

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          name
          author
        }
      }
    }
  `);

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
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: -1px;
          background-color: var(--bg-color);
          clip-path: polygon(100% 95%, 0% 100%, 100% 100%);
          display: block;
        `}
      ></div>
      <Container>
        <h1>
          Hello, I’m {data.site.siteMetadata.name}{' '}
          <span
            css={css`
              display: block;
              color: var(--color-secondary);
              font-size: 1.1rem;
              margin-top: 0.75rem;

              @media (max-width: 875px) {
                line-height: 1.4;
              }
            `}
          >
            Also known as {data.site.siteMetadata.author}, a Frontend Developer
            based in Jakarta
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

          @media (max-width: 382px) {
            bottom: 4rem;
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

            @media (max-width: 382px) {
              height: 12rem;
            }
          `}
        />
      </div>
      <div
        css={css`
          background-color: var(--bg-hero-current-work);
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
          border-radius: var(--border-radius);

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
          I currently work at Xendit - Best Payment Gateway in Indonesia and
          Southeast Asia
        </p>
      </div>
    </section>
  );
}
