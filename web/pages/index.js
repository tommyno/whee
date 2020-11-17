import PropTypes from "prop-types";

import sanity from "settings/client";

import Seo from "utils/seo";

import Footer from "components/Footer";
import CmsBlock from "components/CmsBlock";
import Hero from "components/Hero";
import { Section } from "components/Layout";

const Frontpage = ({ page }) => {
  const { frontpageHero = {}, content = [] } = page;

  return (
    <>
      <Seo page={page} isFrontpage />

      <Section inner="none" outer="none" center>
        <Hero data={frontpageHero} frontpage />
      </Section>
      {content.map((item) => (
        <CmsBlock data={item} key={item._key} />
      ))}

      <Footer frontpage />
    </>
  );
};

// Get data for this particular page based on slug
const query = `*[_type == "frontpage"][0]{
  frontpageHero{
    ...,
    "image": image{..., asset->{_id, metadata{dimensions, lqip}}},    
  },
  content[]{
    ...,
    "faq": title, faq[]->{_id, title, richText, "category": category[]->{title}},
    "image": image{..., asset->{_id, metadata{dimensions, lqip}}},   
  },
  seo
}`;

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
    content: PropTypes.array,
    frontpageHero: PropTypes.object
  }).isRequired
};
export default Frontpage;
