import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./CardGrid.module.scss";

const CardGrid = ({ reverse, children }) => {
  const cardGridClass = classNames({
    [styles.cardGrid]: true,
    [styles.reverse]: reverse
  });
  return <div className={cardGridClass}>{children}</div>;
};

CardGrid.defaultProps = {
  reverse: false
};

CardGrid.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default CardGrid;
