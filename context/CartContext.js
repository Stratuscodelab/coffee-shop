"use client"; // This tells the server to send the client-side code to the browser
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const addToOrder = (item) => {
    setOrder([...order, item]);
    setTotal(total + item.price);
  };

  const removeFromOrder = (index) => {
    const newOrder = [...order];
    const removedItem = newOrder.splice(index, 1);
    setOrder(newOrder);
    setTotal(total - removedItem[0].price);
  };

  const clearCart = () => {
    setOrder([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{ order, total, addToOrder, removeFromOrder, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
