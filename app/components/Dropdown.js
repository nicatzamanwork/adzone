import React from "react";
import "../components/styles/Dropdown.css"; // Separate CSS for Dropdown

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Language</button>
      <div className="dropdown-content">
        <a href="#">English</a>
        <a href="#">Azerbaijani</a>
        <a href="#">Russian</a>
      </div>
    </div>
  );
};

export default Dropdown;
