"use client";

import React from "react";
import Navbar from "../app/components/Navbar"; // Ensure the Navbar is imported
import Contact from "../app/components/Contact";
import InternalServiceLogistic from "../app/components/InternalServicesLogistic";
import { useTranslation } from "react-i18next";
import "../app/components/styles/About.css";
import "../app/components/styles/Blog.css";
import "../app/components/styles/Services.css";

const Blog = () => {
  const { t } = useTranslation("logisticSupport");

  return (
    <>
      <Navbar />
      <header
        className="header"
        style={{ backgroundImage: `url('/images/scouting.jpg')` }}
      >
        <div className="header-overlay">
          <div className="header-content">
            <h1>{t("header.title")}</h1>
          </div>
        </div>
      </header>
      <section className="services-section-internal" id="services">
        <div className="services-content">
          <div className="service-intro">
            <img
              src="/images/ancient/logisticsupportred.png"
              alt={t("intro.iconAlt")}
              className="internal-service-icon"
            />
            <p>{t("intro.text")}</p>
          </div>

          <div className="service-item">
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>{t("services.travelArrangements.title")}</h3>
            <p>{t("services.travelArrangements.description")}</p>
          </div>

          <div className="service-item">
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>{t("services.catering.title")}</h3>
            <p>{t("services.catering.description")}</p>
          </div>

          <div className="service-item">
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>{t("services.crewCoordination.title")}</h3>
            <p>{t("services.crewCoordination.description")}</p>
          </div>

          <div className="service-item">
          <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>{t("services.parkingManagement.title")}</h3>
            <p>{t("services.parkingManagement.description")}</p>
          </div>
        </div>
      </section>

      <InternalServiceLogistic />

      <Contact />
    </>
  );
};

export default Blog;
