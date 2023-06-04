import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import type { Course } from 'src/shared/constants/education.constant';

export type CourseItemProps = Course['course'][number];

export default function CourseItem({ name, year }: CourseItemProps) {
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
