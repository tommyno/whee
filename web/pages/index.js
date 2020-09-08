import React from "react";
import { NextSeo } from "next-seo";

import sanity from "settings/client";

import Block from "components/Block";
import Hero from "components/Hero";
import Topnav from "components/Header";

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
        <Block top={8} left={10}>
          <h1>Whee!</h1>
        </Block>
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
