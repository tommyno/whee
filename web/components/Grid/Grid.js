import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Grid.module.scss";

const Grid = ({ reverse, children }) => {
  const gridClass = classNames({
    [styles.grid]: true,
    [styles[`grid-reverse`]]: reverse
  });

  return (
    <div className={gridClass}>
      {React.Children.map(children, (child) => (
        <div className={styles.gridItem}>{child}</div>
      ))}
    </div>
  );
};

Grid.defaultProps = {
  reverse: false
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
};

export default Grid;
