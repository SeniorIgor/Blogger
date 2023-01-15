import { FC } from 'react';

import { Post } from '@/src/types';

import PostContent from './PostContent/PostContent';

interface PostPageProps {
  post: Post;
}

const PostPage: FC<PostPageProps> = ({ post }) => {
  return <PostContent {...post} />;
};

export default PostPage;
