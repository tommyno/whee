import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Block.module.scss";

const Block = ({ top, bottom, left, right, children }) => {
  const blockClass = classNames({
    [styles.block]: true,
    [styles[`-top-${top}`]]: top,
    [styles[`-bottom-${bottom}`]]: bottom,
    [styles[`-left-${left}`]]: left,
    [styles[`-right-${right}`]]: right
  });
  return <div className={blockClass}>{children}</div>;
};

Block.defaultProps = {
  top: false,
  right: false,
  bottom: false,
  left: false,
  children: null
};

Block.propTypes = {
  top: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  children: PropTypes.node
};

export default Block;
