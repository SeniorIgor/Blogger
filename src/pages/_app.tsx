import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from '@/src/layout/Layout/Layout';
import wrapperStore from '@/src/store/store';

import '@/src/styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <title>Blogger</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="You will find many great posts on Blogger" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapperStore.withRedux(App);
