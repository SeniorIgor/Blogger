import type { NextPage } from 'next';
import Head from 'next/head';

import ContactPage from '../modules/contact/ContactPage';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactPage />;
    </>
  );
};

export default Contact;
