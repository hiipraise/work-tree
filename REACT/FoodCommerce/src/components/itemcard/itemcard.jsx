// import React from 'react';
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./itemcard.css";

const ItemCard = ({ label, name, image,item}) => {

const {addToCart}= useContext(CartContext)  

  return (
    <div className="item-card" onDoubleClick={()=>addToCart(item)} >
      <div className="item-detail">
        <label>{label || "label missing"}</label>
        <h3 className="text-brandblue">{name || "name"}</h3>
        <small>Explore Item</small>
      </div>
      <div>
        <img src={image} alt={`$name`} />
      </div>
    </div>
  );
};

export default ItemCard;
