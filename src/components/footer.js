import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

// Import all Component
import Container from './container';

// import All Assets
import Copyright from '../assets/svg/copyright.inline.svg';
import Codepen from '../assets/svg/codepen.inline.svg';
import Github from '../assets/svg/github.inline.svg';
import Twitter from '../assets/svg/twitter.inline.svg';
import Linkedin from '../assets/svg/linkedin.inline.svg';

const SocialLink = styled.a`
  background: none;

  svg {
    fill: var(--color-primary);
    height: 0.9rem;
  }
`;

export default function Footer() {
  return (
    <footer
      css={css`
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
          <Copyright
            css={css`
              fill: var(--color-primary);
              height: 0.75rem;
            `}
          />
          &nbsp;Aris Rinardi - 2019
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            width: 6rem;
          `}
        >
          <SocialLink
            href='https://codepen.io/finmavis'
            target='_blank'
            rel='noopener noreferrer'
            alt='Fin Mavis Codepen'
          >
            <Codepen />
          </SocialLink>
          <SocialLink
            href='https://github.com/finmavis'
            target='_blank'
            rel='noopener noreferrer'
            alt='Fin Mavis Github'
          >
            <Github />
          </SocialLink>
          <SocialLink
            href='https://twitter.com/finmavis'
            target='_blank'
            rel='noopener noreferrer'
            alt='Fin Mavis Twitter'
          >
            <Twitter />
          </SocialLink>
          <SocialLink
            href='https://linkedin.com/in/aris-rinardi'
            target='_blank'
            rel='noopener noreferrer'
            alt='Linkedin'
          >
            <Linkedin />
          </SocialLink>
        </div>
      </Container>
    </footer>
  );
}
