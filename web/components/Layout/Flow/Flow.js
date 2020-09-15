import PropTypes from "prop-types";

import styles from "./Flow.module.scss";

const Button = ({ blockContent, children }) => {
  // If used on a Sanity block content
  if (blockContent) {
    return <div className={styles.flowBlockContent}>{children}</div>;
  }

  return <div className={styles.flow}>{children}</div>;
};

Button.defaultProps = {
  blockContent: false
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  blockContent: PropTypes.bool
};

export default Button;
