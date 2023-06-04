import { css } from '@emotion/react';

import { EXPERIENCE_DATA } from 'src/shared/constants/experience.constant';

import Container from './ui/container';
import HeadingSection from './ui/heading-section';
import Position from './position';

export default function Experience() {
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
        <HeadingSection>Experience</HeadingSection>
        {EXPERIENCE_DATA.map((experienceItem) => (
          <Position
            key={experienceItem.company}
            name={experienceItem.company}
            subText={experienceItem.position}
            year={experienceItem.year}
          />
        ))}
      </Container>
    </section>
  );
}
