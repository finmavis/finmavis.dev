import React, { Fragment } from 'react';

import LinkedinIcon from '../../assets/svg/linkedin.inline.svg';
import TwitterIcon from '../../assets/svg/twitter.inline.svg';
import GithubIcon from '../../assets/svg/github.inline.svg';
import CodepenIcon from '../../assets/svg/codepen.inline.svg';

export const SOCIAL_LINK = [
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/aris-rinardi',
    content: (
      <Fragment>
        <LinkedinIcon />
        &nbsp;Linkedin
      </Fragment>
    ),
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/finmavis',
    content: (
      <Fragment>
        <TwitterIcon />
        &nbsp;Twitter
      </Fragment>
    ),
  },
  {
    name: 'github',
    link: 'https://github.com/finmavis',
    content: (
      <Fragment>
        <GithubIcon />
        &nbsp;Github
      </Fragment>
    ),
  },
  {
    name: 'codepen',
    link: 'https://codepen.io/finmavis',
    content: (
      <Fragment>
        <CodepenIcon />
        &nbsp;Codepen
      </Fragment>
    ),
  },
];
