import PropTypes from "prop-types";

import styles from "./Flow.module.scss";

const Button = ({ children }) => {
  return <div className={styles.flow}>{children}</div>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
