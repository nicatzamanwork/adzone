import React from "react";
import "../components/styles/Dropdown.css"; // Separate CSS for Dropdown

const Dropdown = () => {
  return (
    <div className="dropdown">
      <meta
        name="description"
        content="Filmworks provides high-quality video production services. Contact us today for your project needs."
      />
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
