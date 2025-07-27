import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <div>Tsotetsi</div>
      <ul>
        <Link to="/scss-testing/">Home</Link>
        <Link to="/scss-testing/about">About</Link>
        <Link to="/scss-testing/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
