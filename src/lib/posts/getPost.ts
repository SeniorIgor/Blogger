import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { Post } from '@/src/types';

import { postsPath } from '../constants';

export const getPost = (fileName: string): Post => {
  const postId = fileName.replace(/\.md$/, '');

  const filePath = path.join(postsPath, `${postId}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    id: postId,
    content,
    ...(data as Pick<Post, 'title' | 'image' | 'createAt' | 'description' | 'isFeatured'>),
  };
};
