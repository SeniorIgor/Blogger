import { routes } from '@/src/constants';

import { NavigationLink } from './Header.types';

export const navigation: Array<NavigationLink> = [
  {
    name: 'Posts',
    link: routes.posts,
  },
  {
    name: 'Contact',
    link: routes.contact,
  },
];
