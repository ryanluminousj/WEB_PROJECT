import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "60px" }}>
        
        {/* ShrekBook Air Section */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            padding: "60px 0",
            background: "linear-gradient(to bottom, #96c5ff, #f8f7ff)",
          }}
        >
          <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>ShrekBook Air</h1>
          <p style={{ fontSize: "18px", margin: 0 }}>Sky blue color.</p>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            Sky high performance with S4.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Link
              to="/shrekbook"
              style={{
                background: "#0071e3",
                color: "white",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Learn more
            </Link>
          </div>

          <img
            src="https://www.apple.com/v/macbook-air/t/images/overview/hero/hero_static__c9sislzzicq6_large.png"
            style={{
              maxWidth: "40%",
              display: "block",
              margin: "20px auto 0 auto",
            }}
          />

          <p style={{ marginTop: "20px", fontSize: "16px" }}>
            <span style={{ color: "#0071e3" }}>Built for</span>{" "}
            <span style={{ color: "#d62d20" }}>Shrepple</span>{" "}
            <span style={{ color: "#ff9900" }}>Intelligence</span>.
          </p>
        </div>

        <div style={{ background: "white", height: "12px", width: "100%" }} />

        {/* SPad Section */}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            background: "linear-gradient(to bottom, #bee1fb, #f8f7ff)",
            padding: "50px 0",
          }}
        >
          <h1 style={{ fontSize: "40px", fontWeight: "bold", margin: 0 }}>
            SPad <span style={{ color: "#0071e3", fontStyle: "italic" }}>air</span>
          </h1>
          <p style={{ fontSize: "20px", color: "#333", margin: "10px 0" }}>
            Now supercharged by the S3 chip.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Link
              to="/spad"
              style={{
                background: "#0071e3",
                color: "white",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Learn more
            </Link>
          </div>

          <img
            src="https://www.pngplay.com/wp-content/uploads/13/iPad-PNG-Free-File-Download.png"
            style={{
              maxWidth: "40%",
              display: "block",
              margin: "20px auto 0 auto",
            }}
          />

          <p style={{ marginTop: "20px", fontSize: "16px" }}>
            <span style={{ color: "#0071e3" }}>Built for</span>{" "}
            <span style={{ color: "#d62d20" }}>Shrepple</span>{" "}
            <span style={{ color: "#ff9900" }}>Intelligence</span>.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;