import React from 'react';
import { css } from '@emotion/core';

import Container from './container';

export default function Playground() {
  return (
    <div
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
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
          Playground
        </h2>
        <div
          css={css`
            display: flex;
            justify-content: space-between;

            & > *:not(:last-child) {
              margin-right: 0.75rem;
            }
          `}
        >
          <div>
            <div>image</div>
            <div>text</div>
          </div>
          <div>
            <div>image</div>
            <div>text</div>
          </div>
          <div>
            <div>image</div>
            <div>text</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
