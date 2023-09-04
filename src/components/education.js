import React from 'react';
import { css } from '@emotion/react';

import Container from './ui/container';
import HeadingSection from './ui/heading-section';
import Position from './position';
import Courses from './courses';

import {
  FORMAL_EDUCATION,
  COURSE_LIST,
} from '../shared/constants/education.constant';

export default function Education() {
  function onClick() {
    window.dataLayer = window.dataLayer || [];
    if (window.dataLayer) {
      window.dataLayer.push({ event: 'education-track-custom-event' });
    }
  }

  function onClickWithValue() {
    window.dataLayer = window.dataLayer || [];
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'education-track-custom-event-with-value',
        pagination_value: 50,
      });
    }
  }
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
        <button id='education-track'>Click</button>
        <button onClick={onClick}>Custom event</button>
        <button onClick={onClickWithValue}>Custom event with value</button>
      </Container>
    </section>
  );
}
