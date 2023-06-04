import PropTypes from 'prop-types';
import { css } from '@emotion/react';

import type { Course } from 'src/shared/constants/education.constant';

import CourseItem from './course-item';

export type CoursesProps = {
  name: string;
  data: Course['course'];
};

export default function Courses({ name, data }: CoursesProps) {
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
          {name}
        </h4>
      </div>
      <div
        css={css`
          margin-top: 0.75rem;
        `}
      >
        {data.map((item) => (
          <CourseItem key={item.name} name={item.name} year={item.year} />
        ))}
      </div>
    </div>
  );
}

Courses.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array,
};
