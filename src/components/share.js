import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share';

import FacebookRoundedIcon from '../shared/assets/svg/facebook-rounded.inline.svg';
import TwitterRoundedIcon from '../shared/assets/svg/twitter-rounded.inline.svg';
import LinkedinRoundedIcon from '../shared/assets/svg/linkedin-rounded.inline.svg';

export default function Share({ url }) {
  return (
    <div
      css={css`
        text-align: center;
        margin-top: 2.5rem;
        margin-bottom: 1.5rem;
      `}
    >
      <p
        css={css`
          margin-bottom: 0.75rem;
        `}
      >
        Share this article:
      </p>
      <div
        css={css`
          display: flex;
          justify-content: center;

          &:hover > * {
            opacity: 0.4;
          }

          & > * {
            cursor: pointer;
            margin: 0;
            transition: all 0.2s ease;
            outline: none;

            &:hover {
              opacity: 1;
            }
          }

          svg {
            height: 2rem;
          }
        `}
      >
        <FacebookShareButton url={url}>
          <FacebookRoundedIcon />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterRoundedIcon />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinRoundedIcon />
        </LinkedinShareButton>
      </div>
    </div>
  );
}

Share.propTypes = {
  url: PropTypes.string.isRequired,
};
