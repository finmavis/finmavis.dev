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
  text-shadow: none;
  background: none;
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
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
          <NavLink to='/blog' activeClassName='active'>
            Blog
          </NavLink>
          <ToggleSwitch />
        </nav>
      </Container>
    </header>
  );
}
