// import React from 'react';
import "./itemcard.css";

const ItemCard = ({ label, name, image }) => {
  return (
    <div className="item-card">
      <div className="item-detail">
        <label>{label || "label missing"}</label>
        <h3>{name || "name"}</h3>
        <small>Explore Item</small>
      </div>
      <div>
        <img src={image} alt={`$name`} />
      </div>
    </div>
  );
};

export default ItemCard;
