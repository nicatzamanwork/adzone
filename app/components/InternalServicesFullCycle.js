"use client";

import "../components/styles/InternalService.css"; // Import global CSS
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function GalleryMain() {
  const { t } = useTranslation("InternalServicesFullCyle");

  const cards = [
    {
      title: t("cards.locationScouting.title"),
      description: t("cards.locationScouting.description"),
      image: "/images/Ateshgah.png",
      link: "/location-scouting",
    },
    {
      title: t("cards.logisticSupport.title"),
      description: t("cards.logisticSupport.description"),
      image: "/images/scouting.jpg",
      link: "/logistics-support",
    },
  ];

  return (
    <>
      <div className="location-page">
        {/* Cards Section */}
        <div className="card-grid">
          {cards.map((card, index) => (
            <Link href={card.link} key={index} className="card">
              <img src={card.image} alt={card.title} className="card-img" />
              <h2>{card.title} &gt;</h2>
              <p>{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
