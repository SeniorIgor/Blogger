import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { getAllPosts } from '@/src/lib';
import PostListPage from '@/src/modules/posts/pages/PostListPage/PostListPage';
import { Post } from '@/src/types';

interface PostsListProps {
  posts: Array<Post>;
}

const PostsList: NextPage<PostsListProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutorials and posts!" />
      </Head>
      <PostListPage posts={posts} />;
    </>
  );
};

export const getStaticProps: GetStaticProps<PostsListProps> = () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default PostsList;
