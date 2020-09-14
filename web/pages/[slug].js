import sanity from "settings/client";

import Seo from "utils/seo";

import Header from "components/Header";
import { Section } from "components/Layout";
import CmsBlock from "components/CmsBlock";

const DynamicPage = ({ page }) => {
  const { title, intro, content, headerMedia } = page;
  console.log("page", page);
  return (
    <>
      <Seo page={page} />

      <Header />

      <article>
        <Section limitedWidth>
          {title && <h1>{title}</h1>}

          {intro && <p className="h3">{intro}</p>}
        </Section>

        {content.map((item) => (
          <CmsBlock data={item} key={item._key} />
        ))}
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
  const page = await sanity.fetch(query, { slug: params.slug });
  return {
    props: {
      page
    }
  };
};

export default DynamicPage;
