import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";

import { Section, Flow } from "components/Layout";
import Image from "components/Image";
import Video from "components/Video";

// Format content from Sanity CMS
const CmsBlock = ({ data }) => {
  const block = data._type;

  if (block === "richText") {
    return (
      <Section inner="none" limitedWidth>
        <Flow blockContent>
          <BlockContent blocks={data.richText} />
        </Flow>
      </Section>
    );
  }

  if (block === "image") {
    return (
      <Section inner="none">
        <Image imageObject={data} />
      </Section>
    );
  }

  if (block === "video") {
    return (
      <Section inner="none">
        <Video url={data.videoUrl} />
      </Section>
    );
  }

  console.error("No presentation configured for block type:", block);
  return null;
};

CmsBlock.propTypes = {
  data: PropTypes.shape({
    _type: PropTypes.string.isRequired,
    altText: PropTypes.string
  }).isRequired
};

export default CmsBlock;
