import { Link } from './links';
import { GitHub, LinkedIn, Mail } from './svgs';

interface Social {
  svg: string;
  url: string;
}

const socials: Social[] = [
  {
    svg: GitHub,
    url: 'https://github.com/eric-weischedel',
  },
  {
    svg: LinkedIn,
    url: 'https://linkedin.com/in/eric-weischedel',
  },
  {
    svg: Mail,
    url: 'mailto:yshuttle@gmail.com',
  },
];

export default socials;
