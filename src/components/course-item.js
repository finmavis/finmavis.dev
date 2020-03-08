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
            {item.name}{' '}
            <span
              css={css`
                text-align: right;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-left: 0.35rem;
              `}
            >
              {item.year}
            </span>
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
