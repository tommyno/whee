import PropTypes from "prop-types";
import classNames from "classnames";
import BlockContent from "@sanity/block-content-to-react";

import { Grid, Flow } from "components/Layout";

import styles from "./TwoRows.module.scss";

const TwoRows = ({ data }) => {
  const { box, richText: richTextLeft } = data;
  const { bgColor = "yellow", richText: richTextRight } = box;
  console.log("two rows data", data);

  const boxClass = classNames({
    [styles.box]: true,
    [styles[`boxBgColor-${bgColor}`]]: bgColor
  });

  return (
    <Grid>
      <Flow blockContent>
        <BlockContent blocks={richTextLeft} />
      </Flow>
      <div className={boxClass}>
        <Flow blockContent className={boxClass}>
          <BlockContent blocks={richTextRight} />
        </Flow>
      </div>
    </Grid>
  );
};

TwoRows.defaultProps = {
  type: "",
  link: "",
  primary: false
};

TwoRows.propTypes = {
  type: PropTypes.string,
  link: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default TwoRows;
