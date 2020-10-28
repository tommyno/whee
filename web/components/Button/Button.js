import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";

import Spinner from "../Spinner";
import styles from "./Button.module.scss";

const Button = ({
  type,
  link,
  primary,
  menu,
  disabled,
  isSubmitting,
  isErrorShake,
  children
}) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles[`button-primary`]]: primary,
    [styles[`button-menu`]]: menu,
    [styles[`error-shake`]]: isErrorShake
  });

  // Submit button
  if (type === "submit") {
    return (
      <button type="submit" className={buttonClass} disabled={disabled}>
        {children}
        {isSubmitting && <Spinner />}
      </button>
    );
  }

  // Link text presented as a button
  return (
    <Link href={link}>
      <a className={buttonClass}>{children}</a>
    </Link>
  );
};

Button.defaultProps = {
  type: "",
  link: "",
  primary: false,
  isSubmitting: false,
  isErrorShake: false,
  menu: false,
  disabled: false
};

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  isErrorShake: PropTypes.bool,
  menu: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Button;
