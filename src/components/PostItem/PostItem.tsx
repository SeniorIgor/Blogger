import { FC, memo, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/src/constants';

import { PostItemProps } from './PostItem.types';

import styles from './PostItem.module.scss';

const PostItem: FC<PostItemProps> = ({ id, title, image, description, createAt }) => {
  const imagePath = `/images/posts/${id}/${image}`;

  const formattedDate = useMemo(
    () =>
      new Date(createAt).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
    [createAt],
  );

  return (
    <li className={styles.root}>
      <Link href={{ pathname: routes.post, query: { postId: id } }} passHref>
        <a>
          <div className={styles.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default memo(PostItem);
