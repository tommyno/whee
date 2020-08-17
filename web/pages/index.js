import React from "react";
import { NextSeo } from "next-seo";
import sanity from "../client";

const query = `*[_type == "person"] {
  _id,
  name,
  image,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
}[0...50]
`;

const People = ({ people }) => {
  console.log("people", people);

  return (
    <>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
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
