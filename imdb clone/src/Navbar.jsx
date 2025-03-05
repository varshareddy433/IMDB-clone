import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#222", color: "white" }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/favorites" style={{ color: "white", textDecoration: "none" }}>Favorites</Link>
    </nav>
  );
};

export default Navbar;
