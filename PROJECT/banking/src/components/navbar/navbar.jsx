import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="logo">
        <Link to="">NotYourBank</Link>
      </div>
      <nav>
        <ul className="flex text-white gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">Career</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="">Security</Link>
          </li>
        </ul>
      </nav>
      <div className="nav-btn">
        <button>
          <Link to="">Sign Up</Link>
        </button>
        <button>
          <Link to="">Login</Link>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
