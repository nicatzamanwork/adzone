"use client";

import React from "react";
import "../components/styles/Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("header"); // Use the 'header' namespace

  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-content">
          <h1>{t("title")}</h1>
          <p>{t("subtitle")}</p>
          <a href="#locations" className="btn">
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
