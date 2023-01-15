import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { getFeaturedPosts } from '../lib';
import HomePage from '../modules/home/HomePage';
import { Post } from '../types';

interface HomeProps {
  posts: Array<Post>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Igor&apos; Blog</title>
        <meta name="description" content="I post about web development." />
      </Head>
      <HomePage posts={posts} />;
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const posts = getFeaturedPosts();

  return {
    props: { posts },
  };
};

export default Home;
