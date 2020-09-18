import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./Section.module.scss";

const Section = ({
  outer,
  inner,
  color,
  limitedWidth,
  noLimit,
  center,
  children
}) => {
  const sectionClassOuter = classNames({
    [styles.outer]: true,
    [styles[`outer-size-${outer}`]]: outer,
    [styles[`outer-color-${color}`]]: color
  });

  const sectionClassInner = classNames({
    [styles.inner]: true,
    [styles[`inner-size-${inner}`]]: inner,
    [styles[`inner-limited-width`]]: limitedWidth,
    [styles[`inner-no-limit`]]: noLimit,
    [styles[`inner-center`]]: center
  });
  return (
    <section className={sectionClassOuter}>
      <div className={sectionClassInner}>{children}</div>
    </section>
  );
};

Section.defaultProps = {
  outer: "medium", // "xsmall", "small", "medium", "large"
  inner: "", // "small", "medium", "large"
  color: "", // "cream", "peach", "red"
  limitedWidth: false,
  noLimit: false,
  center: false
};

Section.propTypes = {
  outer: PropTypes.string,
  inner: PropTypes.string,
  color: PropTypes.string,
  limitedWidth: PropTypes.bool,
  noLimit: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Section;
