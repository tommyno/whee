import PropTypes from "prop-types";

import { Block, Section } from "components/Layout";
import Button from "components/Button";
import Box from "components/Box";

import styles from "./ShoppingCart.module.scss";

const ShoppingCart = ({ items, handleSubmit }) => {
  // Calculate total price
  const totalPrice = items.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

  return (
    <>
      <div className={styles.sticky}>
        <Section outer="none" limitedWidth>
          <div className={styles.header}>
            <h2>
              <a href="#handlekurv" className={styles.cartLink}>
                Handleliste
                <span className={styles.arrowDown}>↓</span>
              </a>
            </h2>
          </div>
        </Section>
      </div>

      {/* Separate offset anchor since we have a sticky menu overlay */}
      <div id="handlekurv" className={styles.anchor} />

      <Block bottom={10}>
        <Section outer="none" limitedWidth>
          <Box data={{ bgColor: "peach" }}>
            <div className={styles.cartContent}>
              {items.map(({ title: itemTitle, quantity, price, id }) => (
                <p key={id}>
                  {quantity} x {itemTitle}, {price * quantity},-
                </p>
              ))}

              <h3 className={styles.totalPrice}>Totalt: {totalPrice},-</h3>
              <Block top={6} bottom={5}>
                <p>
                  Vi monterer kostnadsfritt utstyret på sykkelen din. Faktura
                  sendes til <strong>din@epost.no</strong>
                </p>
              </Block>

              <Button type="submit" primary onClick={handleSubmit}>
                Send bestilling
              </Button>
            </div>
          </Box>
        </Section>
      </Block>
    </>
  );
};

ShoppingCart.propTypes = {
  items: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default ShoppingCart;
