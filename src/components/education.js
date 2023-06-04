import React from 'react';
import { css } from '@emotion/react';

import {
  FORMAL_EDUCATION,
  COURSE_LIST,
} from 'src/shared/constants/education.constant';

import Container from './ui/container';
import HeadingSection from './ui/heading-section';
import Position from './position';
import Courses from './courses';

export default function Education() {
  return (
    <section
      css={css`
        background-color: var(--bg-color-secondary);
        clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
        padding-top: 2rem;
        padding-bottom: 4rem;
      `}
    >
      <Container>
        <HeadingSection>Education</HeadingSection>
        <div>
          {FORMAL_EDUCATION.map((educationItem) => (
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
          {COURSE_LIST.map((courseItem) => (
            <Courses
              key={courseItem.source}
              name={courseItem.source}
              data={courseItem.course}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
