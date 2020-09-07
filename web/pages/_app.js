import Head from "next/head";
import { DefaultSeo } from "next-seo";

import "../styles/main.scss";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "nb_NO",
          url: "https://whee.no/",
          site_name: "Whee!"
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
