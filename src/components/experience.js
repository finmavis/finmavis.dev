import React from 'react';
import { css } from '@emotion/core';

import Container from './container';

export default function Experience() {
  return (
    <div
      css={css`
        background-color: var(--bg-experience);
        padding-top: 3.5rem;
        padding-bottom: 5.5rem;
        clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);

        @media (max-width: 900px) {
          padding-top: 1.75rem;
          padding-bottom: 3.75rem;
        }
      `}
    >
      <Container>
        <h2
          css={css`
            display: block;
            color: var(--color-primary);
            text-align: center;
            margin-bottom: 2rem;
          `}
        >
          Experience
        </h2>
        <div>
          <div
            css={css`
              padding-top: 1rem;
              padding-bottom: 1rem;
              border-bottom: 1px solid var(--border-color);
              font-weight: 700;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-transform: uppercase;
                margin-bottom: 0.25rem;
              `}
            >
              <h4
                css={css`
                  margin: 0;
                  color: var(--color-primary);
                `}
              >
                style theory
              </h4>
              <span>2019 - current</span>
            </div>
            Jr. Web Engineer
          </div>
          <div
            css={css`
              padding-top: 1rem;
              padding-bottom: 1rem;
              border-bottom: 1px solid var(--border-color);
              font-weight: 700;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-transform: uppercase;
                margin-bottom: 0.25rem;
              `}
            >
              <h4
                css={css`
                  margin: 0;
                  color: var(--color-primary);
                `}
              >
                tunaiku - amarbank
              </h4>
              <span>2019</span>
            </div>
            Frontend Engineer
          </div>
          <div
            css={css`
              padding-top: 1rem;
              padding-bottom: 1rem;
              font-weight: 700;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-transform: uppercase;
                margin-bottom: 0.25rem;
              `}
            >
              <h4
                css={css`
                  margin: 0;
                  color: var(--color-primary);
                `}
              >
                PT. Prima Garda Teknologi
              </h4>
              <span>2015 - 2018</span>
            </div>
            Engineer
          </div>
        </div>
      </Container>
    </div>
  );
}
