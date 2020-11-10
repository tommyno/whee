import PropTypes from "prop-types";
import classNames from "classnames";

import { Flow } from "components/Layout";
import PortableText from "components/PortableText";

import styles from "./Box.module.scss";

const Box = ({ data, children }) => {
  const { richText, bgColor } = data;

  const boxClass = classNames({
    [styles.box]: true,
    [styles[`boxBgColor-${bgColor}`]]: bgColor
  });

  return (
    <article className={boxClass}>
      <Flow blockContent className={boxClass}>
        {richText && <PortableText blocks={richText} />}
        {children}
      </Flow>
    </article>
  );
};

Box.defaultProps = {
  data: {},
  children: []
};

Box.propTypes = {
  data: PropTypes.shape({
    bgColor: PropTypes.string,
    richText: PropTypes.array
  }),
  children: PropTypes.node
};

export default Box;
