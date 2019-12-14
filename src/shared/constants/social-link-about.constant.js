import React, { Fragment } from 'react';

import LinkedinIcon from '../../shared/assets/svg/linkedin.inline.svg';
import TwitterIcon from '../../shared/assets/svg/twitter.inline.svg';
import GithubIcon from '../../shared/assets/svg/github.inline.svg';
import CodepenIcon from '../../shared/assets/svg/codepen.inline.svg';

export const SOCIAL_LINK = [
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/aris-rinardi',
    ariaLabel: 'Visit Fin Mavis codepen',
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
    ariaLabel: 'Visit Fin Mavis github',
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
    ariaLabel: 'Visit Fin Mavis twitter',
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
    ariaLabel: 'Visit Fin Mavis linkedin',
    content: (
      <Fragment>
        <CodepenIcon />
        &nbsp;Codepen
      </Fragment>
    ),
  },
];
