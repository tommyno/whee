import PropTypes from "prop-types";

import { Block, Flex } from "components/Layout";

import styles from "./CardWithNumber.module.scss";

const CardWithNumber = ({ data = {}, index }) => {
  const { title, text } = data;
  return (
    <div>
      <Block bottom={4}>
        <Flex justify="center">
          <div className={styles.number}>{index}</div>
        </Flex>
      </Block>
      {title && <h3 className="h2">{title}</h3>}
      {text && (
        <Block top={2}>
          <p>{text}</p>
        </Block>
      )}
    </div>
  );
};

CardWithNumber.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default CardWithNumber;
