"use client";

import "../components/styles/Locations.css";
import "../components/styles/About.css";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Locations = () => {
  const { t } = useTranslation("locations"); // Use 'locations' namespace

  return (
    <section id="locations">
      <h5 className="about-subtitle">{t("subtitle")}</h5>
      <h2>{t("title")}</h2>
      <div className="locations-container">
        {/* Card 1: Overlay on the Image */}
        <div className="location-card">
          <Link href="/richcultural">
            <img src="/images/7.png" alt={t("richCulturalHeritage")} />
            <div className="overlay">
              <h3 style={{ color: "white" }}>{t("richCulturalHeritage")}</h3>
            </div>
          </Link>
        </div>

        {/* Card 2: Content Below the Image */}
        <div className="location-card">
          <Link href="/costeffective">
            <img
              src="/images/cost-effective.jpeg"
              alt={t("costEffectiveFilming")}
            />
            <div className="overlay">
              <h3 style={{ color: "white" }}>{t("costEffectiveFilming")}</h3>
            </div>
          </Link>
        </div>

        {/* Card 3: Overlay on the Image */}
        <div className="location-card">
          <Link href="/diverselocations">
            <img
              src="/images/location.png"
              alt={t("diverseAndUniqueLocations")}
            />
            <div className="overlay">
              <h3 style={{ color: "white" }}>
                {t("diverseAndUniqueLocations")}
              </h3>
            </div>
          </Link>
        </div>

        {/* Card 4: Content Below the Image */}
        <div className="location-card">
          <Link href="/highfilmin">
            <img
              src="/images/High access.jpg"
              alt={t("highFilmingAccessibility")}
            />
            <div className="overlay">
              <h3 style={{ color: "white" }}>{t("highFilmingAccessibility")}</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Locations;
