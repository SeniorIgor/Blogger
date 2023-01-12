import { FC, memo } from 'react';

import PostGrid from '@/src/components/PostGrid/PostGrid';

import { FeaturedPostsProps } from './FeaturedPosts.types';

import styles from './FeaturedPosts.module.scss';

const FeaturedPosts: FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <section className={styles.root}>
      <h2>Features Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default memo(FeaturedPosts);
