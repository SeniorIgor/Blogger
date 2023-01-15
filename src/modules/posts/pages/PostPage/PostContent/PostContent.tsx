import { FC, memo, useMemo } from 'react';
import ReactMarkdown, { Options } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

import { Post } from '@/src/types';

import PostHeader from '../PostHeader/PostHeader';

import { PostContentProps } from './PostContent.types';

import styles from './PostContent.module.scss';

const getMarkdownComponents = ({ id }: Post): Options['components'] => ({
  // img: ({ src, alt }) => <Image src={`/images/posts/${id}/${src}`} alt={alt} width={600} height={300} />,
  p: ({ node, children }) => {
    const firstElement = node.children[0];

    if (firstElement.type === 'element' && firstElement.tagName === 'img') {
      return (
        <div className={styles.image}>
          <Image
            src={`/images/posts/${id}/${firstElement.properties?.src}`}
            alt={firstElement.properties?.alt as string}
            width={600}
            height={300}
          />
        </div>
      );
    }
    return <p>{children}</p>;
  },
  code: ({ className, children }) => {
    const language = className?.split('-')[1];

    return (
      <SyntaxHighlighter style={atomDark} language={language}>
        {children as string}
      </SyntaxHighlighter>
    );
  },
});

const PostContent: FC<PostContentProps> = (props) => {
  const { id, title, image, content } = props;
  const imagePath = `/images/posts/${id}/${image}`;

  const components = useMemo(() => getMarkdownComponents(props), [props]);

  return (
    <article className={styles.root}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
};

export default memo(PostContent);
