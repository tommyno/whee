import PropTypes from "prop-types";

import { Section } from "components/Layout";
import Image from "components/Image";
import Video from "components/Video";

// Format content from Sanity CMS
const HeaderMedia = ({ data }) => {
  const { _type: block = "" } = data[0];

  if (block === "video") {
    return (
      <Section inner="none" limitedWidth>
        <Video url={data[0].videoUrl} />
      </Section>
    );
  }

  if (block === "image") {
    return (
      <Section inner="none">
        <Image imageObject={data[0]} />
      </Section>
    );
  }

  console.error("No header media configured for block type:", block);
  return null;
};

HeaderMedia.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _type: PropTypes.string.isRequired,
      altText: PropTypes.string,
      videoUrl: PropTypes.string
    })
  ).isRequired
};

export default HeaderMedia;
