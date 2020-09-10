import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Flex.module.scss";

const Flex = ({ align, justify, wrap, children }) => {
  const flexClass = classNames({
    [styles.flex]: true,
    [styles[`-align-${align}`]]: align,
    [styles[`-justify-${justify}`]]: justify,
    [styles["-wrap"]]: wrap
  });

  return <div className={flexClass}>{children}</div>;
};

Flex.defaultProps = {
  align: "center",
  justify: "start",
  wrap: false
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.bool
};

export default Flex;
