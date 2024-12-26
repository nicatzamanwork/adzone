"use client"; // Ensure it's a client-side component

import React from "react";
import LanguageSelector from "./LanguageDropDown";
import "../components/styles/Navbar.css";
import Link from "next/link"; // Import Next.js Link component

const Navbar = () => {
  const closeMenu = () => {
    const checkBox = document.getElementById("check");
    checkBox.checked = false;
  };

  const handleContactClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "/#contact"; // Navigate to the home page with the contact section
  };

  return (
    <nav>
      {/* Checkbox for toggling the menu */}
      <input type="checkbox" id="check" />

      {/* Hamburger menu */}
      <label htmlFor="check" className="checkbtn">
        <img src="/images/hamburger.png" alt="Hamburger Menu" />
      </label>

      {/* Logo */}
      <label className="logo">
        <img className="logo" src="/images/logo.png" alt="Logo" />
      </label>

      {/* Navigation links */}
      <ul>
        <li>
          <a href="/#locations" onClick={closeMenu}>
            Azerbaijan
          </a>
        </li>
        <li>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="/#services" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li>
          <a href="/gallerymain" onClick={closeMenu}>
            Locations
          </a>
        </li>
        <li>
          <Link href="/blog" onClick={closeMenu}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/gallery" onClick={closeMenu}>
            Catalog
          </Link>
        </li>
        <li className="contact-button-mobile">
          <a href="#contact" onClick={() => { closeMenu(); handleContactClick(); }}>
            Contact
          </a>
        </li>
      </ul>

      <li className="contact-button">
        <LanguageSelector />
      </li>
      <li className="contact-button">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            window.location.href = "/#contact"; // Navigate to the home page with the contact section
          }}
        >
          Contact
        </a>
      </li>
    </nav>
  );
};

export default Navbar;
