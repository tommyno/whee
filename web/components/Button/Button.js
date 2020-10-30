import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";

import isEmptyObject from "utils/isEmptyObject";
import sleep from "utils/sleep";

import Spinner from "../Spinner";
import styles from "./Button.module.scss";

const Button = ({
  type,
  link,
  primary,
  menu,
  disabled,
  isSubmitting,
  errors,
  onClick,
  children,
  ...rest
}) => {
  const [isErrorShake, setIsErrorShake] = useState(false);
  // Trigger shake-animation on submit button if errors
  useEffect(() => {
    const toggleErrorShake = async () => {
      if (!isEmptyObject(errors)) {
        setIsErrorShake(false);
        await sleep(50); // A delay is needed to re-animate with css classes
        setIsErrorShake(true);
      }
    };
    toggleErrorShake();
  }, [errors]);

  const buttonClass = classNames({
    [styles.button]: true,
    [styles[`button-primary`]]: primary,
    [styles[`button-menu`]]: menu,
    [styles[`error-shake`]]: isErrorShake
  });

  // Submit button
  if (type === "submit") {
    return (
      <button
        type="submit"
        className={buttonClass}
        disabled={disabled}
        {...rest}
      >
        {children}
        {isSubmitting && <Spinner />}
      </button>
    );
  }

  // Button
  if (type === "button") {
    return (
      <button type="button" className={buttonClass} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }

  // Link text presented as a button
  return (
    <Link href={link}>
      <a className={buttonClass} {...rest}>
        {children}
      </a>
    </Link>
  );
};

Button.defaultProps = {
  type: "",
  link: "",
  primary: false,
  isSubmitting: false,
  errors: {},
  menu: false,
  onClick: () => {},
  disabled: false
};

Button.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  errors: PropTypes.object,
  menu: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button;
