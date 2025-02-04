// import React from 'react';
import ItemCard from "../../components/itemcard/itemcard";
import { productsData } from "../../data/product";
import "./style.css";
const Recommended = () => {
  console.log(productsData);
  return (
    <section>
      {productsData.length &&
        productsData.map((product, index) => (
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

export default Recommended;
