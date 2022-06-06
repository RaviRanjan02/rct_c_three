import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  };

  return (
    <CartContext.Provider value={{ count, setCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
