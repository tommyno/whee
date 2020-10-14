import PropTypes from "prop-types";

// Spam prevention
const Input = ({ register }) => {
  return (
    <input
      type="text"
      name="honningkrukke"
      style={{ display: "none" }}
      tabIndex="-1"
      autoComplete="off"
      ref={register}
    />
  );
};

Input.propTypes = {
  register: PropTypes.func.isRequired
};

export default Input;
