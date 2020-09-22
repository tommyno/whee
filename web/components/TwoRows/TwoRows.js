import PropTypes from "prop-types";
import classNames from "classnames";

import { Grid, Flow } from "components/Layout";
import PortableText from "components/PortableText";

import styles from "./TwoRows.module.scss";

const TwoRows = ({ data }) => {
  const { box = {}, richText: richTextLeft } = data;
  const { bgColor = "", richText: richTextRight } = box;

  const boxClass = classNames({
    [styles.boxRight]: true,
    [styles[`boxBgColor-${bgColor}`]]: bgColor
  });

  return (
    <Grid>
      <article className={styles.boxLeft}>
        <Flow blockContent>
          <PortableText blocks={richTextLeft} />
        </Flow>
      </article>
      {!!richTextRight && (
        <article className={boxClass}>
          <Flow blockContent className={boxClass}>
            <PortableText blocks={richTextRight} />
          </Flow>
        </article>
      )}
    </Grid>
  );
};

TwoRows.propTypes = {
  data: PropTypes.shape({
    box: PropTypes.object,
    richText: PropTypes.array
  }).isRequired
};

export default TwoRows;
