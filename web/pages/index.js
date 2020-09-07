import React from "react";
import { NextSeo } from "next-seo";

import sanity from "settings/client";

import Hero from "components/Hero";
import Topnav from "components/Topnav";

const query = `*[_type == "person"] {
  _id,
  name,
  image,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
}[0...50]
`;

const People = ({ people }) => {
  // console.log("people", people);

  return (
    <>
      <NextSeo title="Whee!" description="Sykler og sånt" />
      <Topnav />
      <Hero />
      <div className="main">
        <h1>Whee!</h1>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const people = await sanity.fetch(query);
  return {
    props: { people } // will be passed to the page component as props
  };
};

export default People;
