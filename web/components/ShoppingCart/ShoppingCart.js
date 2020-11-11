import PropTypes from "prop-types";

import { Block, Section } from "components/Layout";
import Box from "components/Box";
import AccessoriesForm from "components/Form/AccessoriesForm";

import styles from "./ShoppingCart.module.scss";

const ShoppingCart = ({ items }) => {
  // Calculate total price
  const totalPrice = items.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

  // Transform shopping cart list to a string, used in form
  const orderString = items
    .map(
      ({ title: itemTitle, quantity, price }) =>
        `${quantity} x ${itemTitle}, ${price * quantity},-`
    )
    .join("\r\n");

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

              <AccessoriesForm items={orderString} />
            </div>
          </Box>
        </Section>
      </Block>
    </>
  );
};

ShoppingCart.propTypes = {
  items: PropTypes.array.isRequired
};

export default ShoppingCart;
