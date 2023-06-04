export type Education = {
  school: string;
  year: string;
  major: string;
};

export const FORMAL_EDUCATION: Education[] = [
  {
    school: '26 Jakarta Vocational high School',
    year: '2011 - 2015',
    major: 'Computer and Network Engineering',
  },
];

export type Course = {
  source: string;
  course: {
    name: string;
    year: number;
  }[];
};

export const COURSE_LIST: Course[] = [
  {
    source: 'Udemy',
    course: [
      {
        name: 'The Web Developer Bootcamp',
        year: 2016,
      },
      {
        name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
        year: 2018,
      },
    ],
  },
  {
    source: 'Wes Bos',
    course: [
      {
        name: 'ES6 for Everyone',
        year: 2018,
      },
      {
        name: 'Fullstack Advanced React and GraphQL',
        year: 2018,
      },
      {
        name: 'Beginner JavaScript',
        year: 2020,
      },
    ],
  },
];
