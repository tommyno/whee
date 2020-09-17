import sanity from "settings/client";

import Seo from "utils/seo";

import CmsBlock from "components/CmsBlock";

const Frontpage = ({ page }) => {
  console.log("frontpage", page);
  const { content = [] } = page;
  return (
    <>
      <Seo page={page} />

      {content.map((item) => (
        <CmsBlock data={item} key={item._key} />
      ))}
    </>
  );
};

// Get data for this particular page based on slug
const query = `*[_type == "frontpage"][0]`;

export const getStaticProps = async () => {
  const page = await sanity.fetch(query);
  return {
    props: {
      page
    }
  };
};

export default Frontpage;
