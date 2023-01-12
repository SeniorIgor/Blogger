import type { NextPage } from 'next';

import FeaturedPosts from '../modules/home/FeaturedPosts/FeaturedPosts';
import Hero from '../modules/home/Hero/Hero';
import { Post } from '../types';

const mockPosts: Array<Post> = [
  {
    id: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    description: `Next.js is a flexible React framework that gives you building blocks to create fast web applications.

    But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.`,
    image: 'getting-started-nextjs.png',
    createAt: '2022-02-10',
  },
  {
    id: 'getting-started-with-nextjs2',
    title: 'Getting Started with NextJS',
    description: `Next.js is a flexible React framework that gives you building blocks to create fast web applications.

    But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.`,
    image: 'getting-started-nextjs.png',
    createAt: '2022-02-10',
  },
  {
    id: 'getting-started-with-nextjs3',
    title: 'Getting Started with NextJS',
    description: `Next.js is a flexible React framework that gives you building blocks to create fast web applications.

    But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.`,
    image: 'getting-started-nextjs.png',
    createAt: '2022-02-10',
  },
  {
    id: 'getting-started-with-nextjs4',
    title: 'Getting Started with NextJS',
    description: `Next.js is a flexible React framework that gives you building blocks to create fast web applications.

    But what exactly do we mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.`,
    image: 'getting-started-nextjs.png',
    createAt: '2022-02-10',
  },
];

const HomePage: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={mockPosts} />
    </>
  );
};

export default HomePage;
