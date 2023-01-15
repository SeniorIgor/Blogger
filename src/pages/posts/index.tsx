import type { GetStaticProps, NextPage } from 'next';

import { getAllPosts } from '@/src/lib';
import PostListPage from '@/src/modules/posts/pages/PostListPage/PostListPage';
import { Post } from '@/src/types';

interface PostsListProps {
  posts: Array<Post>;
}

const PostsList: NextPage<PostsListProps> = ({ posts }) => {
  return <PostListPage posts={posts} />;
};

export const getStaticProps: GetStaticProps<PostsListProps> = () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default PostsList;
