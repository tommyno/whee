import { useEffect } from "react";
import PropTypes from "prop-types";

import sanity from "settings/client";

import Seo from "utils/seo";

import { Section, Block } from "components/Layout";
import CmsBlock from "components/CmsBlock";
import HeaderMedia from "components/HeaderMedia";
import Preorder from "forms/Preorder";
import Footer from "components/Footer";

const DynamicPage = ({ page, slug }) => {
  const { title, intro, content = [], headerMedia = [] } = page;

  // Explode confetti if thank-you page
  useEffect(() => {
    if (slug === "bestilt") {
      const showConfetti = async () => {
        // Dynamically import library
        const confetti = (await import("canvas-confetti")).default;
        setTimeout(() => {
          confetti({
            disableForReducedMotion: true,
            particleCount: 220,
            spread: 100,
            // angle: 270,
            origin: { y: 0.5 },
            colors: [
              "#373737",
              "#f45338",
              "#f6755f",
              "#ffeee5",
              "#62a578",
              "#ffd74b"
            ]
          });
        }, 1000);
      };
      showConfetti();
    }
  }, [slug]);

  return (
    <>
      <Seo page={page} />

      <article>
        <Section limitedWidth outer="firstSection">
          <Block bottom={7}>{title && <h1>{title}</h1>}</Block>
          {intro && <p className="h2">{intro}</p>}
        </Section>

        {/* Show form for "Fortroppen" page */}
        {slug === "forhandsbestill" && (
          <Section limitedWidth>
            <Preorder />
          </Section>
        )}

        {!!headerMedia.length && <HeaderMedia data={headerMedia} />}

        {content.map((item) => (
          <CmsBlock data={item} key={item._key} />
        ))}
      </article>

      <Footer slug={slug} />
    </>
  );
};

// Find all pages - needed to build everything static
// Exclude "bestill" page - since this should be SSR (this is a next.js bug)
const queryAllPages = `*[_type == "page" && slug.current != '' && slug.current != "bestill"] 
{'slug': slug.current}`;

// Get data for this particular page based on slug
const query = `*[_type == "page" && slug.current == $slug]{
	title,
  intro,
  content[]{
    ...,
    "faq": title, faq[]->{_id, title, richText, "category": category[]->{title}},
    "image": image{..., asset->{_id, metadata{dimensions, lqip}}},   
  },
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
