import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <div>Tsotetsi</div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
