// import React from 'react';
import { useContext } from "react";
import ItemCard from "../../components/itemcard/itemcard";
// import { productsData } from "../../data/product";
// import "./style.css";
import { CartContext } from "../../context/cartContext";
const Cart = () => {
  console.log(productsData);
  const {cartItems}= useContext(CartContext)
  return (
    <section>
        <h1>Cart Page</h1>
      {cartItems.length &&
        cartItems.map((product, index) => (
          <ItemCard
            key={index}
            image={product.img}
            label={product.tagline}
            name={product.name}
          />
        ))}
    </section>
  );
};

export default Cart;
