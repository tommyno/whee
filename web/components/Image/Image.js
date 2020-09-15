import PropTypes from "prop-types";
import imageUrlFor from "utils/imageUrlFor";

import styles from "./Image.module.scss";

const Image = ({ imageObject }) => {
  const { caption = "", altText = "" } = imageObject;

  return (
    <div className={styles.imageWrap}>
      {/* TODO: add .fit("max") to disable upscaling of images */}
      <img src={imageUrlFor(imageObject).width(1440).url()} alt={altText} />
      {caption && (
        <div className={styles.caption}>
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
};

Image.propTypes = {
  imageObject: PropTypes.shape({
    caption: PropTypes.string,
    altText: PropTypes.string
  }).isRequired
};

export default Image;
