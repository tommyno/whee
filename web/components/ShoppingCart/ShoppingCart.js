import PropTypes from "prop-types";

import { Block } from "components/Layout";
import Button from "components/Button";

import styles from "./ShoppingCart.module.scss";

const ShoppingCart = ({ items }) => {
  // Calculate total price
  const totalPrice = items.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

  return (
    <>
      <div className={styles.sticky}>
        <h2>
          <a href="#handlekurv" className={styles.cartLink}>
            Handleliste
            <span className={styles.arrowDown}>↓</span>
          </a>
        </h2>
      </div>

      {/* Separate offset anchor since we have a sticky menu overlay */}
      <div id="handlekurv" className={styles.anchor} />

      <div className={styles.shoppingCart}>
        {items.map(({ title: itemTitle, quantity, price, id }) => (
          <p key={id}>
            {quantity} x {itemTitle}, {price * quantity},-
          </p>
        ))}

        <h3 className={styles.totalPrice}>Totalt: {totalPrice},-</h3>
        <Block top={6} bottom={5}>
          <p>
            Vi monterer utstyret på sykkelen, og sender faktura til din
            registrerte e-post: <strong>[din@epost.no]</strong>.
          </p>
        </Block>

        <Button type="submit" primary>
          Send bestilling
        </Button>
      </div>
    </>
  );
};

ShoppingCart.propTypes = {
  items: PropTypes.array.isRequired
};

export default ShoppingCart;
