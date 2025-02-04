import { useState, useEffect } from "react";
import "./bestseller.css";
import ChevronLeft from "../../assets/icon/chevronleft";
import ChevronRight from "../../assets/icon/chevronRight";
import BestSellerItem from "../../components/bestseller_item/bestselleritem";
import { productData } from "../../data/bestselleritem";
const BestSeller = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1086) {
        setFilteredProducts(productData.slice(0, 4)); // Show only first 4 products
      } else {
        setFilteredProducts(productData); // Show all products
      }
    };

    // Run on mount and listen for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bestseller-container">
      <div className="bestseller-product">
        <div className="bestseller-product-img">
          <div className="bestseller-product-name">
            <p>FURNITURE</p>
            <small>{filteredProducts.length} Items</small>
          </div>
        </div>
        <div className="bestseller-product-container">
          <div className="bestseller-header">
            <strong>BESTSELLER PRODUCT</strong>
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
            <div className="chevron-arrows">
              <ChevronLeft />
              <ChevronRight />
            </div>
          </div>
          <hr />
          <div className="bestselleritem-container">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <BestSellerItem
                  key={index}
                  image={product.img}
                  name={product.tagline}
                  category={product.category}
                  price={product.price}
                  priceDiscount={product.priceDiscount}
                />
              ))
            ) : (
              <p>No bestseller products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;

/*
import "./bestseller.css";
import ChevronLeft from "../../assets/icon/chevronleft";
import ChevronRight from "../../assets/icon/chevronRight";
import BestSellerItem from "../../components/bestseller_item/bestselleritem";
import { productData } from "../../data/bestselleritem";

const BestSeller = () => {
  return (
    <div className="bestseller-container">
      <div className="bestseller-product">
        <div className="bestseller-product-img">
          <div className="bestseller-product-name">
            <p>FURNITURE</p>
            <small>6 Items</small>
          </div>
        </div>
        <div className="bestseller-product-container">
          <div className="bestseller-header">
            <strong>BESTSELLER PRODUCT</strong>
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
            <div className="chevron-arrows">
              <ChevronLeft />
              <ChevronRight />
            </div>
          </div>
          <hr />
          <div className="bestselleritem-container">
            {productData.length &&
              productData.map((product, index) => (
                <BestSellerItem
                  key={index}
                  image={product.img}
                  name={product.tagline}
                  category={product.category}
                  price={product.price}
                  priceDiscount={product.priceDiscount}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;


 */
