import { FC } from 'react';
import dynamic from 'next/dynamic';

const NoSSR: FC = ({ children }) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(NoSSR), { ssr: false });
