import PropTypes from "prop-types";
import BlockContent from "@sanity/block-content-to-react";

import imageUrlFor from "utils/imageUrlFor";

import { Section, Flow } from "components/Layout";

// Format content from Sanity CMS

const serializers = {
  types: {
    code: (props) => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
};

const CmsBlock = ({ data }) => {
  console.log(data);
  const block = data._type;

  if (block === "richText") {
    return (
      <Section inner="none" limitedWidth>
        <Flow blockContent>
          <BlockContent blocks={data.richText} serializers={serializers} />
        </Flow>
      </Section>
    );
  }

  if (block === "image") {
    return (
      <Section inner="none">
        <img src={imageUrlFor(data).url()} alt={data.altText || ""} />
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
