import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

import * as gtag from "utils/gtag";

import Header from "components/Header";

import "../styles/main.scss";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // Google Analytics tracking
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="M7fEOP5BBe6sat3elSdQ6tLiODS_OQTbCz4pC2EN8x4"
        />
        <meta property="fb:admins" content="103027534890783" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "nb_NO",
          url: "https://whee.no/",
          site_name: "Whee!"
        }}
      />

      <Header />
      <div data-animate-in key={router.asPath}>
        <Component {...pageProps} path={router.asPath} />
      </div>
    </>
  );
}

export default MyApp;
