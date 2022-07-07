import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#98c8c7",
        height: "50px",
      }}
    >
      <h1
        style={{
          margin: 0,
        }}
      >
        Bookkeeper
      </h1>
      <nav style={{}}>
        <Link to="/product">Product</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
};

export default Header;
