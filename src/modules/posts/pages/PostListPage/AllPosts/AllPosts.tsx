import { FC, memo } from 'react';

import PostGrid from '@/src/components/PostGrid/PostGrid';

import { AllPostsProps } from './AllPosts.types';

import styles from './AllPosts.module.scss';

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  return (
    <section className={styles.root}>
      <h2>All Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default memo(AllPosts);
