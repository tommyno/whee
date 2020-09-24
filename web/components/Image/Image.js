import PropTypes from "prop-types";
import imageUrlFor from "utils/imageUrlFor";

import { Block } from "components/Layout";

import styles from "./Image.module.scss";

const Image = ({ imageObject, maxImageWidth, ...props }) => {
  const { caption = "", altText = "", size = "" } = imageObject;

  // Change default image size if set
  const imageWidth = size === "medium" ? "800" : maxImageWidth;

  return (
    <figure {...props}>
      {/* TODO: add .fit("max") to disable upscaling of images */}
      <img
        src={imageUrlFor(imageObject)
          .width(imageWidth)
          .fit("max")
          .auto("format")
          .url()}
        alt={altText}
        loading="lazy"
      />
      {caption && (
        <Block top={3}>
          <figcaption className={styles.figcaption}>
            <span className="text-caption">{caption}</span>
          </figcaption>
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
    altText: PropTypes.string,
    size: PropTypes.string
  }).isRequired,
  maxImageWidth: PropTypes.string
};

export default Image;
