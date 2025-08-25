import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector(function(state) {
    return state.cart.items.length;
  });

  const navItems = [
    { name: "Store", link: "/" },
    { name: "Shrek", link: "/shrekbook" },
    { name: "SPad", link: "/spad" },
    { name: "SPhone", link: "#" },
    { name: "Watch", link: "#" },
    { name: "Vision", link: "#" },
    { name: "ShrePods", link: "#" },
    { name: "TV & Home", link: "#" },
    { name: "Entertainment", link: "#" },
    { name: "Accessories", link: "#" },
    { name: "Support", link: "#" },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      background: "#f3f3f3",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: "1200px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px"
      }}>

        <Link to="/">
          <img 
            src="https://img.icons8.com/nolan/512/shrek.png"
            style={{ height: "30px" }}
          />
        </Link>

        <ul style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          margin: 0,
          padding: 0,
          fontSize: "12px"
        }}>
          {navItems.map(function(item, index) {
            if(item.link === "#") {
              return <li key={index} style={{ color: "black" }}>{item.name}</li>;
            } else {
              return (
                <li key={index}>
                  <Link to={item.link} style={{ color: "black", textDecoration: "none" }}>
                    {item.name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <div style={{ display: "flex", gap: "10px" }}>
          <button style={{ background: "transparent", border: "none", cursor: "pointer" }}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <Link to="/cart" style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <i className="fa-solid fa-bag-shopping" style={{ fontSize: "18px", color: "black" }}></i>
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: -4,
                right: -4,
                width: 10,
                height: 10,
                background: "red",
                borderRadius: "50%"
              }}></span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;