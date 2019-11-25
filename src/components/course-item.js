import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

export default function CourseItem({ title, data }) {
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
          text-transform: uppercase;
          margin-bottom: 0.25rem;
        `}
      >
        <h4
          css={css`
            margin: 0;
            color: var(--color-primary);
          `}
        >
          {title}
        </h4>
      </div>
      <div
        css={css`
          margin-top: 0.75rem;
        `}
      >
        {data.map(item => (
          <p
            key={item.name}
            css={css`
              margin-top: 0.25rem;
              margin-bottom: 0;
              display: flex;
              justify-content: space-between;
            `}
          >
            {item.name} <span>{item.year}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

CourseItem.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};
