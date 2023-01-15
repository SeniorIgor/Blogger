import { FC } from 'react';

import { Post } from '@/src/types';

import FeaturedPosts from './FeaturedPosts/FeaturedPosts';
import Hero from './Hero/Hero';

interface HomePageProps {
  posts: Array<Post>;
}

const HomePage: FC<HomePageProps> = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export default HomePage;
