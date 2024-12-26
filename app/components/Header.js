import React from "react";
import "../components/styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-content">
          <h1>Discover Azerbaijan</h1>
          <p>Your Next Film Destination</p>
          <a href="#locations" className="btn">
            WHY AZERBAIJAN
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
