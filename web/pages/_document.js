import Document, { Html, Head, Main, NextScript } from "next/document";
import config from "constants/config";

// Insert Google Analytics to head
const GoogleAnalytics = () => {
  // Disable for localhost / dev
  const isLocalhost = process.env.NEXT_PUBLIC_IS_LOCALHOST;
  if (isLocalhost) {
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${config.GA_TRACKING_ID}`}
      />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${config.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `
        }}
      />
    </>
  );
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="no">
        <Head>
          <GoogleAnalytics />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
