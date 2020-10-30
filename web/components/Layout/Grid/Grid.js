import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Grid.module.scss";

const Grid = ({ reverse, verticalCenter, children }) => {
  const gridClass = classNames({
    [styles.grid]: true,
    [styles[`grid-reverse`]]: reverse
  });

  const gridItemClass = classNames({
    [styles.gridItem]: true,
    [styles[`gridItem-verticalCenter`]]: verticalCenter
  });

  return (
    <div className={gridClass}>
      {React.Children.map(children, (child) => (
        <div className={gridItemClass}>{child}</div>
      ))}
    </div>
  );
};

Grid.defaultProps = {
  reverse: false,
  verticalCenter: false
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
  verticalCenter: PropTypes.bool
};

export default Grid;
