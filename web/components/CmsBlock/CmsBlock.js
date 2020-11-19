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
import ListWithNumbers from "components/ListWithNumbers";

// Format content from Sanity CMS
const CmsBlock = ({ data }) => {
  const { _type: block = "" } = data;

  // Rich text
  if (block === "richText") {
    // Sanity wraps large content in a div, but not single content. Logic needed to target flow content.
    const isWrappedInDiv = data.richText.length > 1;
    return (
      <Section limitedWidth>
        <Flow blockContent={isWrappedInDiv}>
          <PortableText blocks={data.richText} />
        </Flow>
      </Section>
    );
  }

  // Image
  if (block === "image") {
    return (
      <Section center>
        <Image imageObject={data} />
      </Section>
    );
  }

  // Video
  if (block === "video") {
    return (
      <Section>
        <Video url={data.videoUrl} />
      </Section>
    );
  }

  // Two rows
  if (block === "twoRows") {
    return (
      <Section>
        <TwoRows data={data} />
      </Section>
    );
  }

  // Box
  if (block === "box") {
    return (
      <Section limitedWidth center>
        <Box data={data} />
      </Section>
    );
  }

  // Hero
  if (block === "hero") {
    return (
      <Section limitedWidth center>
        <Hero data={data} />
      </Section>
    );
  }

  // List
  if (block === "list") {
    return (
      <Section limitedWidth>
        <CardGrid reverse={data.alternating}>
          {data.listItem.map((item) => (
            <Card data={item} key={item._key} />
          ))}
        </CardGrid>
      </Section>
    );
  }

  // List with numbers
  if (block === "listWithNumbers") {
    return (
      <Section limitedWidth>
        <ListWithNumbers data={data} />
      </Section>
    );
  }

  // Divider
  if (block === "divider") {
    return (
      <Section outer="large" limitedWidth>
        <hr />
      </Section>
    );
  }

  // FAQ
  if (block === "faq") {
    const { faq = [], text = "" } = data;

    return (
      <Section limitedWidth>
        <Flow>
          {text && <h2>{text}</h2>}
          {faq.map((item) => {
            return (
              <article key={item._id}>
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
    listItem: PropTypes.array,
    listWithNumbersItem: PropTypes.array
  }).isRequired
};

export default CmsBlock;
