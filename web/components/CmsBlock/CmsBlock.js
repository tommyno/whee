import PropTypes from "prop-types";

import { Section, Flow } from "components/Layout";
import PortableText from "components/PortableText";
import Image from "components/Image";
import Video from "components/Video";
import Card from "components/Card";
import CardGrid from "components/CardGrid";
import TwoRows from "components/TwoRows";
import Hero from "components/Hero";
import Box from "components/Box";

// Format content from Sanity CMS
const CmsBlock = ({ data }) => {
  const { _type: block = "" } = data;

  // Rich text
  if (block === "richText") {
    return (
      <Section inner="none" limitedWidth>
        <Flow blockContent>
          <PortableText blocks={data.richText} />
        </Flow>
      </Section>
    );
  }

  // Image
  if (block === "image") {
    return (
      <Section inner="none">
        <Image imageObject={data} />
      </Section>
    );
  }

  // Video
  if (block === "video") {
    return (
      <Section inner="none">
        <Video url={data.videoUrl} />
      </Section>
    );
  }

  // Two rows
  if (block === "twoRows") {
    return (
      <Section inner="none">
        <TwoRows data={data} />
      </Section>
    );
  }

  // Box
  if (block === "box") {
    return (
      <Section inner="none" limitedWidth center>
        <Box data={data} />
      </Section>
    );
  }

  // Hero
  if (block === "hero") {
    return (
      <Section inner="none" limitedWidth center>
        <Hero data={data} />
      </Section>
    );
  }

  // List
  if (block === "list") {
    return (
      <Section inner="none" limitedWidth>
        <CardGrid reverse={data.alternating}>
          {data.listItem.map((item) => (
            <Card data={item} key={item._key} />
          ))}
        </CardGrid>
      </Section>
    );
  }

  // Divider
  if (block === "divider") {
    return (
      <Section inner="none" outer="large" limitedWidth>
        <hr />
      </Section>
    );
  }

  // FAQ
  if (block === "faq") {
    const { faq = [], text = "" } = data;

    return (
      <Section inner="none" limitedWidth>
        <Flow>
          {text && <h2>{text}</h2>}
          {faq.map((item) => {
            return (
              <article key={item._key}>
                <h3>{item.title}</h3>
                <PortableText blocks={item.richText.richText} />
              </article>
            );
          })}
        </Flow>
      </Section>
    );
  }

  console.error("No presentation configured for block type:", block);
  return null;
};

CmsBlock.propTypes = {
  data: PropTypes.shape({
    _type: PropTypes.string.isRequired,
    richText: PropTypes.array,
    altText: PropTypes.string,
    videoUrl: PropTypes.string,
    alternating: PropTypes.bool,
    listItem: PropTypes.array
  }).isRequired
};

export default CmsBlock;
