import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ link, children }) => {
  return (
    <a className={styles.button} href={link}>
      {children}
    </a>
  );
};

Button.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
