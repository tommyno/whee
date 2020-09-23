import PropTypes from "prop-types";

import styles from "./Textarea.module.scss";

const Textarea = ({ name, label, placeholder, disabled, register }) => {
  return (
    <div className={styles.inputWrap}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          <span className="text-label">{label}</span>
        </label>
      )}
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        ref={register}
        className={styles.textarea}
        rows="4"
      />
    </div>
  );
};

Textarea.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  register: PropTypes.func.isRequired
};

export default Textarea;
