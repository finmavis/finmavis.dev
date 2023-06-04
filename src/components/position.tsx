import { css } from '@emotion/react';
import PropTypes from 'prop-types';

import type { Experience } from 'src/shared/constants/experience.constant';

export type PositionProps = {
  name: Experience['company'];
  year: Experience['year'];
  subText: Experience['position'];
};

export default function Position({ name, year, subText }: PositionProps) {
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
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
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
        <span
          css={css`
            text-align: right;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: 1.25;
            padding-left: 0.35rem;
          `}
        >
          {year}
        </span>
      </div>
      {subText}
    </div>
  );
}

Position.defaultProps = {
  name: '',
  year: '',
  subText: '',
};

Position.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};
