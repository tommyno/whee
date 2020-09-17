import PropTypes from "prop-types";

import sanity from "settings/client";

import Seo from "utils/seo";

import { Section, Block } from "components/Layout";
import CmsBlock from "components/CmsBlock";
import HeaderMedia from "components/HeaderMedia";
import Form from "components/Form";

const DynamicPage = ({ page, slug }) => {
  const { title, intro, content = [], headerMedia = [] } = page;

  return (
    <>
      <Seo page={page} />

      <article>
        <Section limitedWidth>
          <Block bottom={4}>{title && <h1>{title}</h1>}</Block>
          {intro && <p className="h2">{intro}</p>}
        </Section>

        {!!headerMedia.length && <HeaderMedia data={headerMedia} />}

        {content.map((item) => (
          <CmsBlock data={item} key={item._key} />
        ))}

        {/* Show form for "Fortroppen" page */}
        {slug === "fortroppen" && (
          <Section limitedWidth>
            <Form />
          </Section>
        )}
      </article>
    </>
  );
};

// Find all pages - needed to build everything static
const queryAllPages = `*[_type == "page" && slug.current != ''] 
{'slug': slug.current}`;

// Get data for this particular page based on slug
const query = `*[_type == "page" && slug.current == $slug]{
	title,
  intro,
  content,
  headerMedia,
  seo
}[0]`;

export const getStaticPaths = async () => {
  const pages = (await sanity.fetch(queryAllPages)) || [];
  const paths = pages.map((page) => ({
    params: { slug: page.slug }
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;
  const page = await sanity.fetch(query, { slug });
  return {
    props: {
      page,
      slug
    }
  };
};

DynamicPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    intro: PropTypes.string,
    content: PropTypes.array,
    headerMedia: PropTypes.array
  }).isRequired,
  slug: PropTypes.string.isRequired
};

export default DynamicPage;
