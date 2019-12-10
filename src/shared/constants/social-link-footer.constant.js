import React from 'react';

import CodepenIcon from '../../shared/assets/svg/codepen.inline.svg';
import GithubIcon from '../../shared/assets/svg/github.inline.svg';
import TwitterIcon from '../../shared/assets/svg/twitter.inline.svg';
import LinkedinIcon from '../../shared/assets/svg/linkedin.inline.svg';

export const SOCIAL_LINK = [
  {
    name: 'codepen',
    link: 'https://codepen.io/finmavis',
    content: <CodepenIcon />,
  },
  {
    name: 'github',
    link: 'https://github.com/finmavis',
    content: <GithubIcon />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/finmavis',
    content: <TwitterIcon />,
  },
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/aris-rinardi',
    content: <LinkedinIcon />,
  },
];
