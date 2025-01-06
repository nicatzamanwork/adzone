"use client";

import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageDropDown";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import "../components/styles/Navbar.css";

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const closeMenu = () => {
    const checkBox = document.getElementById("check");
    if (checkBox) checkBox.checked = false;
  };

  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <img src="/images/hamburger.png" alt="Menu" />
      </label>
      <label className="logo">
        <a href="/#home">
          <img className="logo" src="/images/logo.png" alt="Logo" />
        </a>
      </label>
      <ul className="navbar-list">
        <li>
          <a href="/#locations" onClick={closeMenu}>
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a href="/#about" onClick={closeMenu}>
            {t("navbar.about")}
          </a>
        </li>
        <li>
          <a href="/#services" onClick={closeMenu}>
            {t("navbar.services")}
          </a>
        </li>
        <li>
          <a href="/gallerymain" onClick={closeMenu}>
            {t("navbar.locations")}
          </a>
        </li>
        <li>
          <Link href="/blog" onClick={closeMenu}>
            {t("navbar.blog")}
          </Link>
        </li>
        <li>
          <Link href="/gallery" onClick={closeMenu}>
            {t("navbar.catalog")}
          </Link>
        </li>
        {/* Contact Button for Mobile */}
        <li className="contact-button-mobile">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/#contact";
            }}
          >
            {t("navbar.contact")}
          </a>
        </li>
        {/* Language Selector for Mobile */}
        <li className="language-selector-mobile">
          <LanguageSelector />
        </li>
      </ul>
      {/* Desktop Versions */}
      <div className="language-selector-desktop">
        <LanguageSelector />
      </div>
      <div className="contact-button">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/#contact";
          }}
        >
          {t("navbar.contact")}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
