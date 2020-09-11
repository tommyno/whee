import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const Input = ({ name, type, placeholder, label, disabled, register }) => {
  return (
    <div className={styles.inputWrap}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        disabled={disabled}
        ref={register}
        className={styles.input}
      />
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  label: "",
  disabled: false
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default Input;
