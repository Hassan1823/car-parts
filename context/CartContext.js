"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const router = useRouter;

  return (
    <CartContext.Provider
      value={{
        cart,
      }}
    ></CartContext.Provider>
  );
};
