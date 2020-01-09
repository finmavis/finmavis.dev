import React from 'react';

import LinkedinIcon from '../../shared/assets/svg/linkedin.inline.svg';
import TwitterIcon from '../../shared/assets/svg/twitter.inline.svg';
import GithubIcon from '../../shared/assets/svg/github.inline.svg';
import CodepenIcon from '../../shared/assets/svg/codepen.inline.svg';

export const SOCIAL_LINK = [
  {
    name: 'github',
    link: 'https://github.com/finmavis',
    ariaLabel: 'Visit Fin Mavis Github',
    label: 'Github',
    icon: <GithubIcon />,
  },
  {
    name: 'linkedin',
    link: 'https://linkedin.com/in/aris-rinardi',
    ariaLabel: 'Visit Fin Mavis Linkedin',
    label: 'Linkedin',
    icon: <LinkedinIcon />,
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/finmavis',
    ariaLabel: 'Visit Fin Mavis Twitter',
    label: 'Twitter',
    icon: <TwitterIcon />,
  },
  {
    name: 'codepen',
    link: 'https://codepen.io/finmavis',
    ariaLabel: 'Visit Fin Mavis Codepen',
    label: 'Codepen',
    icon: <CodepenIcon />,
  },
];
