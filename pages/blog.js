"use client";

import "../app/components/styles/Navbar.css";
import "../app/components/styles/Locations.css";
import Link from "next/link";
import Navbar from "../app/components/Navbar";
import { useTranslation } from "react-i18next";

const Locations = () => {
  const { t } = useTranslation("location"); // Use the 'locations' namespace for this page

  return (
    <>
      <Navbar />
      <section id="locations">
        <h2>{t("title")}</h2>
        <div className="locations-container">
          {/* Card 1 */}
          <div className="location-card">
            <Link href="/howtofilm-blog">
              <img src="/images/Ateshgah (15).jpg" alt={t("card1.alt")} />
              <div className="overlay">
                <h3 style={{ color: "white" }}>{t("card1.title")}</h3>
              </div>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="location-card">
            <Link href="/landscape-blog">
              <img src="/images/land.JPG" alt={t("card2.alt")} />
              <div className="overlay">
                <h3 style={{ color: "white" }}>{t("card2.title")}</h3>
              </div>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="location-card">
            <Link href="/tenbestfilming-blog">
              <img src="/images/Khinalig (12) (1).jpg" alt={t("card3.alt")} />
              <div className="overlay">
                <h3 style={{ color: "white" }}>{t("card3.title")}</h3>
              </div>
            </Link>
          </div>

          {/* Card 4 */}
          <div className="location-card">
            <Link href="/spotlight-blog">
              <img src="/images/bakunight.jpg" alt={t("card4.alt")} />
              <div className="overlay">
                <h3 style={{ color: "white" }}>{t("card4.title")}</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
