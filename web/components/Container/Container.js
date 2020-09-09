import PropTypes from "prop-types";

import styles from "./Container.module.scss";

const Container = ({ children }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
