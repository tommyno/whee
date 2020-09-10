import { NextSeo } from "next-seo";

import Header from "components/Header";

const DynamicPage = () => {
  return (
    <>
      <NextSeo title="Whee!" description="Sykler og sånt" />

      <Header />

      <h2>Dynamisk landingsside</h2>
    </>
  );
};

export default DynamicPage;
