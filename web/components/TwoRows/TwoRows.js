import PropTypes from "prop-types";

import isEmpty from "utils/isEmptyObject";

import { Grid, Flow } from "components/Layout";
import PortableText from "components/PortableText";
import Box from "components/Box";

import styles from "./TwoRows.module.scss";

const TwoRows = ({ data }) => {
  const { box = {}, richText: richTextLeft } = data;

  return (
    <Grid>
      <article className={styles.boxLeft}>
        <Flow blockContent>
          <PortableText blocks={richTextLeft} />
        </Flow>
      </article>
      {!isEmpty(box) && <Box data={box} />}
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
