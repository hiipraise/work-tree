import { createContext, useEffect, useState } from "react";
import { notify } from "../hooks/toastconfig";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("savedCartItems");
    try {
      const parsedItems = savedCartItems ? JSON.parse(savedCartItems) : [];
      return Array.isArray(parsedItems) ? parsedItems : [];
    } catch (error) {
      console.error("Error parsing savedCartItems from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("savedCartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    if (!item || !item.id) {
      console.error("Invalid item passed to addToCart:", item);
      notify("added item to cart");
      return;
    }

    setCartItems((prevCart) => {
      const sanitizedCart = prevCart.filter(Boolean);
      const itemExists = sanitizedCart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (itemExists) {
        return sanitizedCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...sanitizedCart, { ...item, quantity: 1 }];
      }
    });
    notify("Item added to cart");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
