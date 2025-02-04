import "./bestselleritem.css";

const BestSellerItem = ({ image, name, category, price, priceDiscount }) => {
  return (
    <div className="bestselleritem-card">
      <div>
        <img className="bestselleritempoduct_img" src={image} alt={`$name`} />
      </div>
      <div className="bestselleritempoduct_info">
        <strong>{name || "name missing"}</strong>
        <a href="#">{category}</a>
        <div className="bestselleritemprice">
          <p>₦{price}</p>
         <span>₦{priceDiscount}</span>
        </div>
      </div>
    </div>
  );
};

export default BestSellerItem;
