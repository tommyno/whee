import PropTypes from "prop-types";
import classNames from "classnames";

import Block from "components/Layout/Block";

import styles from "./Input.module.scss";

const Input = ({
  name,
  type,
  placeholder,
  label,
  widthCharacters,
  disabled,
  register,
  error,
  ...rest
}) => {
  const inputClass = classNames({
    [styles.input]: true,
    [styles[`input-error`]]: error
  });

  // Add custom width if set (+3 = padding)
  const customWidth = widthCharacters ? parseInt(widthCharacters, 10) + 2 : "";

  return (
    <div className={styles.inputWrap}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          <span className="text-label">{label}</span>
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        disabled={disabled}
        ref={register}
        className={inputClass}
        style={customWidth ? { width: `${customWidth}ch` } : {}}
        {...rest}
      />
      {error?.message && (
        <Block top={2}>
          <div className="text-label color--red">↑ {error.message}</div>
        </Block>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  label: "",
  widthCharacters: "",
  disabled: false,
  error: false
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  widthCharacters: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.any,
  register: PropTypes.func.isRequired
};

export default Input;
