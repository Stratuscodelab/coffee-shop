"use client";
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const removeFromCart = (index) => {
    const newOrder = [...order];
    const removedItem = newOrder.splice(index, 1);
    setOrder(newOrder);
    setTotal((prevTotal) => prevTotal - removedItem[0].price);
  };

  const clearCart = () => {
    setOrder([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider value={{ order, total, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}