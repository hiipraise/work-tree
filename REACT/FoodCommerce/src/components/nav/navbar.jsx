// import React from 'react'
import "./navbar.css";
import Search from "../../assets/icon/search";
import LikeSvg from "../../assets/icon/likeSvg";
import CartSvg from "../../assets/icon/cartSvg";
import UserSvg from "../../assets/icon/userSvg";

const NavBar = () => {
  return (
    <nav>
      <h1>Bandage</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">
            Shop
            <i
              className="fa fa-chevron-down shop-chevron"
              aria-hidden="true"
            ></i>
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
      </ul>
      <span className="span-sign-cart-like">
        <p className="icon-login">
          <UserSvg/>
          Login / Register
        </p>
        <Search />
        <p className="cart-icon">
          <CartSvg />1
        </p>
        <p className="like-icon">
          <LikeSvg />1
        </p>
      </span>
    </nav>
  );
};

export default NavBar;
