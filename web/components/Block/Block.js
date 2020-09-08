import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Block.module.scss";

const Block = ({
  top,
  bottom,
  left,
  right,
  responsive,
  children,
  ...props
}) => {
  const blockClass = classNames({
    [styles.block]: true,
    [styles[`-top-${top}`]]: top,
    [styles[`-bottom-${bottom}`]]: bottom,
    [styles[`-left-${left}`]]: left,
    [styles[`-right-${right}`]]: right,
    [styles["-responsive"]]: responsive
  });
  return (
    <div className={blockClass} {...props}>
      {children}
    </div>
  );
};

Block.defaultProps = {
  top: false,
  right: false,
  bottom: false,
  left: false,
  responsive: false,
  children: null
};

Block.propTypes = {
  top: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  responsive: PropTypes.bool,
  children: PropTypes.node
};

export default Block;
