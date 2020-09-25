import PropTypes from "prop-types";

import styles from "./Flow.module.scss";

const Flow = ({ blockContent, children }) => {
  // If used on a Sanity block content
  if (blockContent) {
    return <div className={styles.flowBlockContent}>{children}</div>;
  }

  return <div className={styles.flow}>{children}</div>;
};

Flow.defaultProps = {
  blockContent: false
};

Flow.propTypes = {
  children: PropTypes.node.isRequired,
  blockContent: PropTypes.bool
};

export default Flow;
