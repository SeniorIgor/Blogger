import { Post } from '@/src/types';

import { getAllPosts } from './getAllPosts';

export const getFeaturedPosts = (): Array<Post> => {
  const files = getAllPosts();

  return files.filter((post) => post.isFeatured);
};
