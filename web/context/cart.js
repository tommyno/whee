import { useState, createContext } from "react";
import PropTypes from "prop-types";

const initialState = [];

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const addItem = ({ title, price, _key }) => {
    // Check if product exist in cart
    const index = state.findIndex((product) => product.title === title);

    // Duplicate state since we are mutating
    const newState = [...state];

    // Update existing
    if (index > -1) {
      newState[index].quantity += 1;
    } else {
      // Add new product
      newState.push({
        title,
        price,
        quantity: 1,
        id: _key
      });
    }

    // Set state
    setState(newState);
  };

  const removeItem = ({ title }) => {
    const index = state.findIndex((product) => product.title === title);

    const newState = [...state];

    if (index > -1) {
      if (newState[index].quantity === 1) {
        // If only one, remove item completely
        newState.splice(index, 1);
      } else {
        // Decrease quantity
        newState[index].quantity -= 1;
      }
    }

    setState(newState);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default CartContext;
