import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/gallery">Gallery</Link>
        <Link to="/about">About</Link>
        <Link to="/portraiture">Portraiture</Link>
        <Link to="/available">Available</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
