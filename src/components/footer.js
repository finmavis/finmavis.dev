import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

// Import all Component
import Container from './container';

import { SOCIAL_LINK } from '../shared/constants/social-link-footer.constant';

const SocialLink = styled.a`
  background: none;
  transition: all 0.2s ease;

  svg {
    fill: var(--color-primary);
    height: 0.9rem;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export default function Footer() {
  return (
    <footer
      css={css`
        position: absolute;
        bottom: 0;
        width: 100%;
        background: var(--bg-footer);
        display: block;
        height: 4rem;
        color: var(--color-primary);
        font-size: 0.9rem;
        font-weight: 600;
      `}
    >
      <Container
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          &copy; Fin Mavis - {new Date().getFullYear()}
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 6rem;

            &:hover > * {
              opacity: 0.4;
            }
          `}
        >
          {SOCIAL_LINK.map(item => (
            <SocialLink
              key={item.link}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.content}
            </SocialLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
