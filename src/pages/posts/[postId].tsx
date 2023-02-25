import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import { getAllPostsFiles, getPost } from '@/src/lib';
import { Post } from '@/src/types';

const PostPage = dynamic(() => import('@/src/modules/posts/pages/PostPage/PostPage'));

interface Params extends ParsedUrlQuery {
  postId: string;
}

interface PostsProps {
  post: Post;
}

const Post: NextPage<PostsProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <PostPage post={post} />;
    </>
  );
};

export const getStaticProps: GetStaticProps<PostsProps, Params> = ({ params }) => {
  const { postId } = params as Params;

  const post = getPost(postId);

  return {
    props: { post },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const files = getAllPostsFiles();

  const postIds = files.map((file) => file.replace(/\.md$/, ''));

  return {
    paths: postIds.map((postId) => ({ params: { postId } })),
    fallback: false,
  };
};

export default Post;
