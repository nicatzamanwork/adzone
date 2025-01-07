"use client";

import React from "react";
import Navbar from "../app/components/Navbar";
import Contact from "../app/components/Contact";
import InternalServiceFullCycle from "../app/components/InternalServicesFullCycle";
import { useTranslation } from "react-i18next";
import "../app/components/styles/About.css";
import "../app/components/styles/Blog.css";
import "../app/components/styles/Services.css";

const Blog = () => {
  const { t } = useTranslation("fullCycleProduction");

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
          <p className="intro-text">{t("intro.text")}</p>

          <div
            className="service-category"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            <img
              src="/images/ancient/fullpre.png"
              alt={t("services.preProduction.iconAlt")}
              className="internal-service-icon"
            />
            <h3>{t("services.preProduction.title")}</h3>
            <ul className="service-list">
              <li>
                <strong>
                  {t("services.preProduction.scriptDevelopment.title")}:
                </strong>{" "}
                {t("services.preProduction.scriptDevelopment.description")}
              </li>
              <li>
                <strong>
                  {t("services.preProduction.storyboarding.title")}:
                </strong>{" "}
                {t("services.preProduction.storyboarding.description")}
              </li>
              <li>
                <strong>{t("services.preProduction.casting.title")}:</strong>{" "}
                {t("services.preProduction.casting.description")}
              </li>
              <li>
                <strong>{t("services.preProduction.equipment.title")}:</strong>{" "}
                {t("services.preProduction.equipment.description")}
              </li>
              <li>
                <strong>{t("services.preProduction.crew.title")}:</strong>{" "}
                {t("services.preProduction.crew.description")}
              </li>
              <li>
                <strong>{t("services.preProduction.budgeting.title")}:</strong>{" "}
                {t("services.preProduction.budgeting.description")}
              </li>
              <li>
                <strong>{t("services.preProduction.setDesign.title")}:</strong>{" "}
                {t("services.preProduction.setDesign.description")}
              </li>
            </ul>
          </div>

          <div
            className="service-category"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            <img
              src="/images/ancient/preproduction.png"
              alt={t("services.production.iconAlt")}
              className="internal-service-icon"
            />
            <h3>{t("services.production.title")}</h3>
            <ul className="service-list">
              <li>
                <strong>{t("services.production.filming.title")}:</strong>{" "}
                {t("services.production.filming.description")}
              </li>
              <li>
                <strong>
                  {t("services.production.cinematography.title")}:
                </strong>{" "}
                {t("services.production.cinematography.description")}
              </li>
              <li>
                <strong>{t("services.production.onSet.title")}:</strong>{" "}
                {t("services.production.onSet.description")}
              </li>
            </ul>
          </div>

          <div
            className="service-category"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            <img
              src="/images/ancient/production.png"
              alt={t("services.postProduction.iconAlt")}
              className="internal-service-icon"
            />
            <h3>{t("services.postProduction.title")}</h3>
            <ul className="service-list">
              <li>
                <strong>{t("services.postProduction.editing.title")}:</strong>{" "}
                {t("services.postProduction.editing.description")}
              </li>
            </ul>
            <ul className="service-list">
              <li>
                <strong>{t("services.postProduction.sound.title")}:</strong>{" "}
                {t("services.postProduction.editing.description")}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <InternalServiceFullCycle />
      <Contact />
    </>
  );
};

export default Blog;
