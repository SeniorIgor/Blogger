import { ReactElement } from 'react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications" />
        </body>
      </Html>
    );
  }
}

export default Document;
