import { useContext } from "react";
import "./navbar.css";
import Search from "../../assets/icon/search";
import LikeSvg from "../../assets/icon/likeSvg";
import CartSvg from "../../assets/icon/cartSvg";
import UserSvg from "../../assets/icon/userSvg";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { monthlyAllowance } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="top-0 fixed">
      <h1>Bandage</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">
            Shop
            <i
              className="fa fa-chevron-down shop-chevron"
              aria-hidden="true"
            ></i>
          </Link>
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
          <UserSvg />
          <Link to="/login">
            <span>Login</span>
          </Link>{" "}
          /
          <Link to="/register">
            <span>Register</span>
          </Link>{" "}
        </p>
        <Search />
        <p className="cart-icon">
          <Link className="flex gap-2 items-center" to="/cart">
            <CartSvg />
            {cartItems && cartItems.length}
          </Link>
        </p>
        <p className="like-icon">
          <LikeSvg /> {monthlyAllowance}
        </p>
      </span>
    </nav>
  );
};

export default NavBar;
