import PropTypes from "prop-types";

// Return a youtube id from an url
const findYoutubeId = (url = "") => {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const result = url.match(regex) || [];
    const id = result[1];
    if (id) {
      return id;
    }
  }
  console.error("Could not find id of url:", url);
  return null;
};

findYoutubeId.propTypes = {
  url: PropTypes.string.isRequired
};

export default findYoutubeId;
