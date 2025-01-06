"use client";

import "../components/styles/Services.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("services"); // Use 'services' namespace

  return (
    <section id="services" className="services-section">
      <h5 className="about-subtitle">{t("subtitle")}</h5>
      <h2 className="services-title">{t("title")}</h2>
      <div className="service-boxes-container">
        {/* Service 1 */}
        <Link href="/location-scouting" passHref>
          <div className="service-box">
            <img
              src="/images/Ateshgah.jpg"
              alt={t("services.locationScouting.title")}
              className="service-image"
            />
            <div className="service-content">
              <h3>
                {t("services.locationScouting.title")}{" "}
                <img
                  src="/images/arrow.png"
                  alt="Arrow"
                  className="arrow-icon"
                />
              </h3>
              <p>{t("services.locationScouting.description")}</p>
            </div>
          </div>
        </Link>

        {/* Service 2 */}
        <Link href="/logistics-support" passHref>
          <div className="service-box">
            <img
              src="/images/scouting.jpg"
              alt={t("services.logisticsSupport.title")}
              className="service-image"
            />
            <div className="service-content">
              <h3>
                {t("services.logisticsSupport.title")}{" "}
                <img
                  src="/images/arrow.png"
                  alt="Arrow"
                  className="arrow-icon"
                />
              </h3>
              <p>{t("services.logisticsSupport.description")}</p>
            </div>
          </div>
        </Link>

        {/* Service 3 */}
        <Link href="/full-cycle-video" passHref>
          <div className="service-box">
            <img
              src="/images/fullscale.jpg"
              alt={t("services.fullCycleProduction.title")}
              className="service-image"
            />
            <div className="service-content">
              <h3>
                {t("services.fullCycleProduction.title")}{" "}
                <img
                  src="/images/arrow.png"
                  alt="Arrow"
                  className="arrow-icon"
                />
              </h3>
              <p>{t("services.fullCycleProduction.description")}</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Services;
