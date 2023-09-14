import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  const addToCart = ({ product }) => {
    if (items.some((item) => item.id === product.id)) {
      setItems((prevState) => {
        return prevState.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      });
    } else {
      setItems((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }
  };

  const addQuantity = (id) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
      });
    });
  };
  const decreaseQuantity = (id) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            return { ...item, quantity: 1 };
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
      });
    });
  };

  const deleteToCart = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, addQuantity, decreaseQuantity, deleteToCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
