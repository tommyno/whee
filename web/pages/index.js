import PropTypes from "prop-types";

import sanity from "settings/client";

import Seo from "utils/seo";

import Footer from "components/Footer";
import Header from "components/Header";
import CmsBlock from "components/CmsBlock";

const Frontpage = ({ page }) => {
  const { content = [] } = page;
  return (
    <>
      <Seo page={page} />
      <Header />
      {content.map((item) => (
        <CmsBlock data={item} key={item._key} />
      ))}
      <Footer frontpage />
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

Frontpage.propTypes = {
  page: PropTypes.shape({
    content: PropTypes.array
  }).isRequired
};
export default Frontpage;
