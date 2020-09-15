import PropTypes from "prop-types";
import findYoutubeId from "utils/findYoutubeId";

import styles from "./Video.module.scss";

const Video = ({ url }) => {
  const id = findYoutubeId(url);

  return (
    <div className={styles.videoWrap}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video"
      />
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired
};

export default Video;
