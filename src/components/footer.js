import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Container from './ui/container';

import { SOCIAL_LINK } from '../shared/constants/social-link.constant';

const SocialLink = styled.a`
  background: none;
  transition: all 0.2s ease;
  padding: 0.75rem 0.5rem 0.25rem;
  box-shadow: none;

  @media (min-width: 900px) {
    padding: 0 0.5rem;
  }

  svg {
    fill: var(--color-primary);
    height: 1rem;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export default function Footer(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

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
          &copy; {data.site.siteMetadata.author} - {new Date().getFullYear()}
        </div>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;

            &:hover > * {
              opacity: 0.4;
            }
          `}
        >
          {SOCIAL_LINK.map((item) => (
            <SocialLink
              key={item.link}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={item.ariaLabel}
            >
              {item.icon}
            </SocialLink>
          ))}
        </div>
      </Container>
    </footer>
  );
}
