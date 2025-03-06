// import { useContext, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./bestselleritem.css";

const BestSellerItem = ({ image, name, category, price, priceDiscount }) => {
  const { addItemToCart } = useContext(CartContext);
  // const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  // const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    const item = {
      image,
      name,
      category,
      price,
      priceDiscount,
    };
    addItemToCart(item);
    // setInCart(true);
  };

  // const handleRemoveFromCart = () => {
  //   const item = {
  //     image,
  //     name,
  //     category,
  //     price,
  //     priceDiscount,
  //   };
  //   removeItemFromCart(item);
  //   setInCart(false);
  // };

  return (
    <div className="bestselleritem-card">
      <div onDoubleClick={handleAddToCart}>
        <img className="bestselleritempoduct_img" src={image} alt={`${name}`} />
      </div>
      <div className="bestselleritempoduct_info">
        <strong>{name || "name missing"}</strong>
        <a href="#">{category}</a>
        <div className="bestselleritemprice">
          <p>₦{price}</p>
          <span>₦{priceDiscount}</span>
        </div>
        {/* {inCart ? (
          <button className="removecartbtn" onDoubleClick={handleRemoveFromCart}>
            Remove from cart
          </button>
        ) : (
          <button className="addcartbtn" onDoubleClick={handleAddToCart}>
            Add to cart
          </button>
        )} */}
      </div>
    </div>
  );
};

export default BestSellerItem;
