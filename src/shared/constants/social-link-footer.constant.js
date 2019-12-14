import React from 'react';

import CodepenIcon from '../../shared/assets/svg/codepen.inline.svg';
import GithubIcon from '../../shared/assets/svg/github.inline.svg';
import TwitterIcon from '../../shared/assets/svg/twitter.inline.svg';
import LinkedinIcon from '../../shared/assets/svg/linkedin.inline.svg';

export const SOCIAL_LINK = [
  {
    name: 'codepen',
    link: 'https://codepen.io/finmavis',
    ariaLabel: 'Visit Fin Mavis codepen',
    content: <CodepenIcon />,
  },
  {
    name: 'github',
    link: 'https://github.com/finmavis',
    ariaLabel: 'Visit Fin Mavis github',
    content: <GithubIcon />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/finmavis',
    ariaLabel: 'Visit Fin Mavis twitter',
    content: <TwitterIcon />,
  },
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/aris-rinardi',
    ariaLabel: 'Visit Fin Mavis linkedin',
    content: <LinkedinIcon />,
  },
];
