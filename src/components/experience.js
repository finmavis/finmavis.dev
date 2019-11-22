import React from 'react';
import { css } from '@emotion/core';

import Container from './container';
import HeadingSection from './heading-section';
import Position from './position';

import { EXPERIENCE_DATA } from '../shared/constants/experience.constant';

export default function Experience() {
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
        <HeadingSection>Experience</HeadingSection>
        <div>
          {EXPERIENCE_DATA.map(experienceItem => (
            <Position
              key={experienceItem.company}
              name={experienceItem.company}
              subText={experienceItem.position}
              year={experienceItem.year}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
