import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Container from './container';
import ToggleSwitch from './toggle-switch';

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  color: var(--color-secondary);
  font-family: inherit;
  font-weight: 700;

  &.active {
    color: var(--color-primary);
  }
`;

export default function Header() {
  return (
    <header
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: block;
        z-index: 10;
      `}
    >
      <Container>
        <nav
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 0.75rem 0;

            & > *:not(:last-child) {
              margin-right: 0.5rem;
            }

            @media (max-width: 900px) {
              justify-content: center;
            }
          `}
        >
          <NavLink to='/' activeClassName='active' aria-label='Go to home page'>
            Home
          </NavLink>
          <NavLink
            to='/about/'
            activeClassName='active'
            aria-label='Go to about page'
          >
            About
          </NavLink>
          <NavLink
            to='/blog/'
            partiallyActive={true}
            activeClassName='active'
            aria-label='Go to blog page'
          >
            Blog
          </NavLink>
          <ToggleSwitch />
        </nav>
      </Container>
    </header>
  );
}
