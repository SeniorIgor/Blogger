import { FC, memo } from 'react';
import Image from 'next/image';

import { PostHeaderProps } from './PostHeader.types';

import styles from './PostHeader.module.scss';

const PostHeader: FC<PostHeaderProps> = ({ title, image }) => {
  return (
    <div className={styles.root}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </div>
  );
};

export default memo(PostHeader);
