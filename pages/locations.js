"use client";

import Head from "next/head";
import Navbar from "../app/components/Navbar";
import "./gallerymain.css"; // Import global CSS
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function GalleryMain() {
  const { t } = useTranslation("gallerymain"); // Use 'gallery' namespace for translations

  const cards = [
    {
      title: t("cards.urban.title"),
      description: t("cards.urban.description"),
      image: "/images/Ur/Mod/Ur-Mod-3.png",
      link: "/gallery/urban", // Link to Urban page
    },
    {
      title: t("cards.europe.title"),
      description: t("cards.europe.description"),
      image: "/images/Eur/His/Eur-His-3.png",
      link: "/gallery/europe", // Link to Europe page
    },
    {
      title: t("cards.nature.title"),
      description: t("cards.nature.description"),
      image: "/images/Khinalig (21).jpg",
      link: "/gallery/nature", // Link to Nature page
    },
    {
      title: t("cards.ancient.title"),
      description: t("cards.ancient.description"),
      image: "/images/7 (1).jpg",
      link: "/gallery/ancient", // Link to Ancient page
    },
  ];

  return (
    <>
      <meta
        name="description"
        content="Filmworks provides high-quality video production services. Contact us today for your project needs."
      />
      <title>Choosing the Perfect Filming Location - A Complete Guide</title>

      <Navbar />
      <Head>
        <title>Locations - Choosing the Perfect Filming Location</title>
      </Head>
      <header className="header">
        <h1 className="title">{t("title")}</h1>
      </header>
      <div className="location-page">
        {/* Cards Section */}
        <div className="card-grid">
          {cards.map((card, index) => (
            <Link href={card.link} key={index} className="card">
              <img src={card.image} alt={card.title} className="card-img" />
              <h2>{card.title} &gt;</h2>
              {/* <p>{card.description}</p> */}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
