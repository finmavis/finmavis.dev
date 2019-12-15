import React from 'react';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

export default function Position({ name, year, subText }) {
  return (
    <div
      css={css`
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-weight: 700;

        &:not(:last-child) {
          border-bottom: 1px solid var(--border-color);
        }
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
          `}
        >
          {name}
        </h4>
        <span>{year}</span>
      </div>
      {subText}
    </div>
  );
}

Position.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};
