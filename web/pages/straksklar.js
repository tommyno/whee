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
          <Block bottom={4}>
            {title && (
              <h1 data-animate-in data-animation-order="1">
                {title}
              </h1>
            )}
          </Block>
          {intro && (
            <p className="h2" data-animate-in data-animation-order="2">
              {intro}
            </p>
          )}
        </Section>

        {!!headerMedia.length && (
          <HeaderMedia
            data={headerMedia}
            data-animate-in
            data-animation-order="3"
          />
        )}

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

// Get data for this particular page based on slug
const query = `*[_type == "page" && slug.current == "straksklar"]{
	title,
  intro,
  content[]{
    ...,
    "faq": title, faq[]->{_id, title, richText, "category": category[]->{title}}
  },
  headerMedia,
  seo
}[0]`;

export const getStaticProps = async () => {
  const page = await sanity.fetch(query);
  return {
    props: {
      page
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
