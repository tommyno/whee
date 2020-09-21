import PropTypes from "prop-types";
import classNames from "classnames";

import { Flow } from "components/Layout";
import PortableText from "components/PortableText";

import styles from "./Box.module.scss";

const Box = ({ data }) => {
  const { richText, bgColor } = data;

  const boxClass = classNames({
    [styles.box]: true,
    [styles[`boxBgColor-${bgColor}`]]: bgColor
  });

  return (
    <article className={boxClass}>
      <Flow blockContent className={boxClass}>
        <PortableText blocks={richText} />
      </Flow>
    </article>
  );
};

Box.propTypes = {
  data: PropTypes.shape({
    bgColor: PropTypes.string,
    richText: PropTypes.array
  }).isRequired
};

export default Box;
