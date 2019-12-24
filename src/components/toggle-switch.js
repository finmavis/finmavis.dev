import React from 'react';
import { css } from '@emotion/core';
import useDarkMode from 'use-dark-mode';

import LightIcon from '../shared/assets/svg/light-icon.svg';
import DarkIcon from '../shared/assets/svg/dark-icon.svg';

export default function ToggleSwitch(props) {
  const { value, toggle, enable, disable } = useDarkMode(true);

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <img
        src={LightIcon}
        css={css`
          height: 0.95rem;
          cursor: pointer;
          margin: 0;
        `}
        onClick={disable}
        alt='Light Button'
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        `}
      >
        <input
          type='checkbox'
          id='toggle-switch-dark-mode'
          css={css`
            height: 0;
            width: 0;
            visibility: hidden;

            &:checked + label {
              background: transparent;
            }

            &:checked + label:after {
              left: calc(100% - 0.2rem);
              transform: translateX(-100%);
            }
          `}
          checked={value}
          onChange={toggle}
        />
        <label
          htmlFor='toggle-switch-dark-mode'
          css={css`
            cursor: pointer;
            text-indent: -9999px;
            width: 2.5rem;
            height: 0.95rem;
            background: transparent;
            display: block;
            border-radius: 5rem;
            position: relative;
            border: 1px solid var(--ash);

            &:after {
              content: '';
              position: absolute;
              top: 0.1rem;
              left: 0.2rem;
              width: 0.65rem;
              height: 0.65rem;
              background: var(--ash);
              border-radius: 0.65rem;
              transition: 0.2s ease;
            }
          `}
        >
          Toggle Dark Mode
        </label>
      </div>
      <img
        src={DarkIcon}
        css={css`
          height: 0.75rem;
          cursor: pointer;
          margin: 0;
        `}
        onClick={enable}
        alt='Dark Button'
      />
    </div>
  );
}
