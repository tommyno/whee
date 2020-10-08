import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Input.module.scss";

const Input = ({
  name,
  type,
  placeholder,
  label,
  disabled,
  register,
  isError,
  ...rest
}) => {
  const inputClass = classNames({
    [styles.input]: true,
    [styles[`input-error`]]: isError
  });

  const labelClass = classNames({
    [styles.label]: true,
    [styles[`label-error`]]: isError
  });

  return (
    <div className={styles.inputWrap}>
      {label && (
        <label htmlFor={name} className={labelClass}>
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
        {...rest}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  label: "",
  disabled: false,
  isError: false
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isError: PropTypes.bool,
  register: PropTypes.func.isRequired
};

export default Input;
