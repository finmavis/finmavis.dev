import React from 'react';
import { css } from '@emotion/core';

import Container from './container';
import HeadingSection from './heading-section';
import Position from './position';
import CourseItem from './course-item';

import {
  FORMAL_EDUCATION,
  COURSE_LIST,
} from '../shared/constants/education.constant';

export default function Education() {
  return (
    <div
      css={css`
        background-color: var(--bg-experience);
        padding-top: 2rem;
        padding-bottom: 4rem;
        clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
      `}
    >
      <Container>
        <HeadingSection>Education</HeadingSection>
        <div>
          {FORMAL_EDUCATION.map(educationItem => (
            <Position
              key={educationItem.school}
              name={educationItem.school}
              subText={educationItem.major}
              year={educationItem.year}
            />
          ))}
        </div>
        <HeadingSection>Courses</HeadingSection>
        <div>
          {COURSE_LIST.map(courseItem => (
            <CourseItem
              key={courseItem.source}
              title={courseItem.source}
              data={courseItem.course}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
