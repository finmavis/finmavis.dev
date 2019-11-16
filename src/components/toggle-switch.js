/** Import Dependencies */
import React from 'react';
import { css } from '@emotion/core';
import useDarkMode from 'use-dark-mode';

/** Import Assets */
import LightIcon from '../assets/svg/light-icon.svg';
import DarkIcon from '../assets/svg/dark-icon.svg';

export default function ToggleSwitch(props) {
  const { value, toggle, enable, disable } = useDarkMode();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <LightIcon
        css={css`
          height: 19px;
          cursor: pointer;
        `}
        onClick={disable}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 5px;
          margin-right: 5px;
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
              left: calc(100% - 4px);
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
            width: 50px;
            height: 19px;
            background: transparent;
            display: block;
            border-radius: 100px;
            position: relative;
            border: 1px solid var(--ash);

            &:after {
              content: '';
              position: absolute;
              top: 2px;
              left: 4px;
              width: 13px;
              height: 13px;
              background: var(--ash);
              border-radius: 13px;
              transition: 0.2s ease;
            }
          `}
        >
          Toggle Dark Mode
        </label>
      </div>
      <DarkIcon
        css={css`
          height: 15px;
          cursor: pointer;
        `}
        onClick={enable}
      />
    </div>
  );
}
