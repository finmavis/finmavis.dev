import React from 'react';
import { css } from '@emotion/react';
import PropTypes from 'prop-types';

export default function CourseItem({ name, year }) {
  return (
    <p
      key={name}
      css={css`
        margin-top: 0.25rem;
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
      `}
    >
      {name}{' '}
      <span
        css={css`
          text-align: right;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-left: 0.5rem;
        `}
      >
        {year}
      </span>
    </p>
  );
}

CourseItem.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
