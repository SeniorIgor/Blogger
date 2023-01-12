import { FC, memo } from 'react';

import PostItem from '../PostItem/PostItem';

import { PostGridProps } from './PostGrid.types';

import styles from './PostGrid.module.scss';

const PostGrid: FC<PostGridProps> = ({ posts }) => {
  return (
    <ul className={styles.root}>
      {posts.map((post) => (
        <PostItem {...post} key={post.id} />
      ))}
    </ul>
  );
};

export default memo(PostGrid);
