import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#ddd",
        minHeight: "50px",
        padding: "20px 20px",
      }}
    >
      <nav
        style={{
          display: "flex",
          flex: "0 auto",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <span>Home</span>
        <span>Product</span>
        <span>User</span>
        <span>Terms</span>
      </nav>
    </div>
  );
};

export default Footer;
