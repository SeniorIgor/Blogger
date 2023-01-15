import fs from 'fs';

import { Post } from '@/src/types';

import { postsPath } from '../constants';

import { getPost } from './getPost';

export const getAllPostsFiles = () => {
  return fs.readdirSync(postsPath);
};

export const getAllPosts = (): Array<Post> => {
  const files = getAllPostsFiles();

  const posts = files.map((fileName) => getPost(fileName));

  return posts.sort((a, b) => (a.createAt > b.createAt ? -1 : 1));
};
