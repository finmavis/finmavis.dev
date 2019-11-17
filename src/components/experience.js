import React from 'react';
import { css } from '@emotion/core';

import Container from './container';
import ExperienceItem from './experience-item';

import { EXPERIENCE_DATA } from '../shared/constants/experience.constant';

export default function Experience() {
  return (
    <div
      css={css`
        background-color: var(--bg-experience);
        padding-top: 3.5rem;
        padding-bottom: 5.5rem;
        clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);

        @media (max-width: 900px) {
          padding-top: 1.75rem;
          padding-bottom: 3.75rem;
        }
      `}
    >
      <Container>
        <h2
          css={css`
            display: block;
            color: var(--color-primary);
            text-align: center;
            margin-bottom: 2rem;
          `}
        >
          Experience
        </h2>
        <div>
          {EXPERIENCE_DATA.map(item => (
            <ExperienceItem key={item.company} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
}
