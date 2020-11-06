import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Flex } from "components/Layout";

import CartContext from "context/cart";

import styles from "./AddToBasket.module.scss";

const AddToBasket = ({ data }) => {
  const { price, title, _key } = data;
  const cart = React.useContext(CartContext);

  const [count, setCount] = useState(0);
  const [calculatedPrice, setCalculatedPrice] = useState(price);

  const handlePlus = () => {
    setCount(count + 1);
    cart.addItem({ title, price, _key });
  };

  const handleMinus = () => {
    setCount(count - 1);
    cart.removeItem({ title });
  };

  useEffect(() => {
    if (count > 0) {
      setCalculatedPrice(count * price);
    }
  }, [count, price]);

  const AddButton = () => {
    return (
      <button type="button" className={styles.addButton} onClick={handlePlus}>
        Legg til
      </button>
    );
  };

  const Increment = () => {
    return (
      <>
        <button
          type="button"
          className={styles.increment}
          onClick={handleMinus}
        >
          -
        </button>
        <span className={styles.count}>
          <span>{count}</span>
        </span>
        <button type="button" className={styles.increment} onClick={handlePlus}>
          +
        </button>
      </>
    );
  };

  return (
    <Flex>
      <span className={styles.price}>{calculatedPrice},-</span>
      {count === 0 && <AddButton />}
      {count > 0 && <Increment />}
    </Flex>
  );
};

AddToBasket.propTypes = {
  data: PropTypes.object.isRequired
};

export default AddToBasket;
