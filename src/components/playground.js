import React from 'react';
import { css } from '@emotion/core';

import Container from './container';
import HeadingSection from './heading-section';

export default function Playground() {
  return (
    <div
      css={css`
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container>
        <HeadingSection>Playground</HeadingSection>
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
