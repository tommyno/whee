import PropTypes from "prop-types";
import imageUrlFor from "utils/imageUrlFor";

import { Block } from "components/Layout";

const Image = ({ imageObject, maxImageWidth, ...props }) => {
  const { caption = "", altText = "" } = imageObject;

  return (
    <figure {...props}>
      {/* TODO: add .fit("max") to disable upscaling of images */}
      <img
        src={imageUrlFor(imageObject).width(maxImageWidth).fit("max").url()}
        alt={altText}
        loading="lazy"
      />
      {caption && (
        <Block top={3}>
          <figcaption className="text-caption">{caption}</figcaption>
        </Block>
      )}
    </figure>
  );
};

Image.defaultProps = {
  maxImageWidth: "1340"
};

Image.propTypes = {
  imageObject: PropTypes.shape({
    caption: PropTypes.string,
    altText: PropTypes.string
  }).isRequired,
  maxImageWidth: PropTypes.string
};

export default Image;
