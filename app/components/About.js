"use client";

import { useTranslation } from "react-i18next";
import "../components/styles/About.css";

const About = () => {
  const { t } = useTranslation("about"); // Use 'about' namespace

  return (
    <section className="about" id="about">
      <title>About Us - Filmworks</title>
      <meta
        name="description"
        content="Filmworks provides high-quality video production services. Contact us today for your project needs."
      />

      <div className="about-content">
        <h5 className="about-subtitle">{t("subtitle")}</h5>
        <h2 className="about-title">{t("title")}</h2>
        <p className="about-description">{t("description")}</p>
        <a href="#contact" className="about-link">
          {t("contactLink")}
        </a>
      </div>
      <div className="about-image">
        <img src="images/rich.jpg" alt="Office Environment" />
      </div>
    </section>
  );
};

export default About;
