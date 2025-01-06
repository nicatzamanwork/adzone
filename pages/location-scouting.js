"use client";

import React from "react";
import Navbar from "../app/components/Navbar";
import Contact from "../app/components/Contact";
import InternalServiceLocation from "../app/components/InternalServicesLocation";
import { useTranslation } from "react-i18next";

const InternalService = () => {
  const { t } = useTranslation("locationScouting");

  return (
    <>
      <Navbar />
      <header
        className="internal-header"
        style={{ backgroundImage: `url('/images/Ateshgah.jpg')` }}
      >
        <div className="internal-header-overlay">
          <div className="internal-header-content">
            <h1>{t("header.title")}</h1>
          </div>
        </div>
      </header>
      <section className="internal-services-section" id="services">
        <div className="internal-services-content">
          <div className="internal-service-item">
            <img
              src="/images/ancient/road.png"
              alt={t("services.item1.iconAlt")}
              className="internal-service-icon"
            />
            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              {t("services.item1.title")}
            </h3>
            <p>{t("services.item1.description")}</p>
          </div>

          <div className="internal-service-item">
            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              {t("services.item2.title")}
            </h3>
            <p>{t("services.item2.description")}</p>
          </div>

          <div className="internal-service-item">
            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              {t("services.item3.title")}
            </h3>
            <p>{t("services.item3.description")}</p>
          </div>

          <div className="internal-service-item">
            <h3 style={{ marginTop: "2rem", marginBottom: "1rem" }}>
              {t("services.item4.title")}
            </h3>
            <p>{t("services.item4.description")}</p>
          </div>
        </div>
      </section>
      <InternalServiceLocation />
      <Contact />
      <style jsx>{`
        /* Header Styling */
        .internal-header {
          background-size: cover;
          background-position: center;
          height: 60vh;
          position: relative;
        }

        .internal-header-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 0 2rem;
        }

        .internal-header-content {
          color: #fff;
        }

        .internal-header-content h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 0;
        }

        /* Services Section */
        .internal-services-section {
          padding: 4rem 25rem;
          background: white;
          text-align: center;
        }

        .internal-services-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .internal-service-item {
          margin-bottom: 2rem;
        }

        .internal-service-icon {
          width: 80px;
          height: auto;
          margin: 0 auto 1rem;
        }

        .internal-service-item h3 {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .internal-service-item p {
          font-size: 1rem;
          color: #555;
          line-height: 1.8;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .internal-header-content h1 {
            font-size: 2rem;
          }
          /* Services Section */
          .internal-services-section {
            padding: 4rem 2rem;
            background: white;
            text-align: center;
          }

          .internal-service-icon {
            width: 60px;
          }

          .internal-service-item h3 {
            font-size: 1.2rem;
          }

          .internal-service-item p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default InternalService;
