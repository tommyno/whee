import PropTypes from "prop-types";

import { Block, Flex } from "components/Layout";

import styles from "./ListWithNumbers.module.scss";

const ListWithNumbers = ({ data = {} }) => {
  const { title = "", listWithNumbersItem = [] } = data;
  return (
    <>
      {title && (
        <Block bottom={9}>
          <h2 className="h3">{title}</h2>
        </Block>
      )}
      <ol className={styles.grid}>
        {listWithNumbersItem.map((item, index) => {
          const { title: itemTitle = "", text = "", _key = "" } = item;
          const number = index + 1;

          return (
            <li className={styles.gridItem} key={_key}>
              {itemTitle && (
                <h3 className="text-list-with-numbers">
                  <Flex>
                    <div className={styles.number}>{number}</div>
                    <div className={styles.title}>{itemTitle}</div>
                  </Flex>
                </h3>
              )}
              {text && (
                <Block top={2}>
                  <p>{text}</p>
                </Block>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
};

ListWithNumbers.propTypes = {
  data: PropTypes.object.isRequired
};

export default ListWithNumbers;
