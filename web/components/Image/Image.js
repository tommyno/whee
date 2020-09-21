import PropTypes from "prop-types";
import imageUrlFor from "utils/imageUrlFor";

import { Block } from "components/Layout";

const Image = ({ imageObject, ...props }) => {
  const { caption = "", altText = "" } = imageObject;

  return (
    <figure {...props}>
      {/* TODO: add .fit("max") to disable upscaling of images */}
      <img src={imageUrlFor(imageObject).width(1440).url()} alt={altText} />
      {caption && (
        <Block top={3}>
          <figcaption className="text-caption">{caption}</figcaption>
        </Block>
      )}
    </figure>
  );
};

Image.propTypes = {
  imageObject: PropTypes.shape({
    caption: PropTypes.string,
    altText: PropTypes.string
  }).isRequired
};

export default Image;
