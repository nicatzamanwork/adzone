"use client";

import React from "react";
import "../app/components/styles/About.css";
import Navbar from "../app/components/Navbar";
import Contact from "../app/components/Contact";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("costeffective");

  return (
    <>
      <meta
        name="description"
        content="Filmworks provides high-quality video production services. Contact us today for your project needs."
      />
      <Navbar />
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="about-title">{t("title")}</h2>
          <p className="about-description">{t("description")}</p>
          <a
            href="/locations"
            className="about-link"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              window.location.href = "/locations"; // Navigate to the gallery page
            }}
          >
            {t("catalogLink")}
          </a>
        </div>
        <div className="about-image">
          <img src="images/cost-effective.jpeg" alt={t("imageAlt")} />
        </div>
      </section>
      <Contact />
    </>
  );
};

export default About;
