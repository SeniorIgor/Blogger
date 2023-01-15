import { Post } from '@/src/types';

export interface PostHeaderProps extends Pick<Post, 'title' | 'image'> {}
