import { FC } from 'react';

import { Post } from '@/src/types';

import AllPosts from './AllPosts/AllPosts';

interface PostListPageProps {
  posts: Array<Post>;
}

const PostListPage: FC<PostListPageProps> = ({ posts }) => {
  return <AllPosts posts={posts} />;
};

export default PostListPage;
