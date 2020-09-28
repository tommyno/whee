import PropTypes from "prop-types";

import isEmpty from "utils/isEmptyObject";

import { Grid, Flow, Block } from "components/Layout";
import PortableText from "components/PortableText";
import Box from "components/Box";
import Button from "components/Button";
import Image from "components/Image";

import styles from "./TwoRows.module.scss";

const TwoRows = ({ data }) => {
  const { box = {}, button = {}, image = {}, richText: richTextLeft } = data;

  return (
    <Grid>
      <article className={styles.boxLeft}>
        <Flow blockContent>
          <PortableText blocks={richTextLeft} />
        </Flow>

        {!isEmpty(image) && (
          <Block top={6}>
            <Image size="medium" imageObject={image} />
          </Block>
        )}

        {!isEmpty(button) && (
          <Block top={6}>
            <Button link={button.href} primary={button.primary}>
              {button.text}
            </Button>
          </Block>
        )}
      </article>
      {!isEmpty(box) && <Box data={box} />}
    </Grid>
  );
};

TwoRows.propTypes = {
  data: PropTypes.shape({
    box: PropTypes.object,
    richText: PropTypes.array,
    button: PropTypes.object,
    image: PropTypes.object
  }).isRequired
};

export default TwoRows;
