"use client";

import Image from "next/image";
import Navbar from "../app/components/Navbar";
import { useTranslation } from "react-i18next";
import "./blogPage.css"; // global stylesheet

const Spotlight = () => {
  const { t } = useTranslation("spotlight");

  return (
    <>
      <meta
        name="description"
        content="Filmworks provides high-quality video production services. Contact us today for your project needs."
      />
      <Navbar />
      <div className="page-container">
        <main className="content">
          <header className="header">
            <h2 className="header-title">{t("title")}</h2>
            <Image
              src="/images/bakunight.jpg"
              alt={t("headerImageAlt")}
              className="header-image"
              width={800}
              height={450}
              priority
            />
          </header>
          <article className="article">
            <p>{t("fusionOfOldAndNew.text3")}</p>
            <h3>{t("fusionOfOldAndNew.title")}</h3>
            <p>{t("fusionOfOldAndNew.text1")}</p>
            <p>{t("fusionOfOldAndNew.text2")}</p>

            <h3>{t("diverseUrbanLandscapes.title")}</h3>
            <ul>
              <li>
                <strong>{t("diverseUrbanLandscapes.list.0.title")}:</strong>{" "}
                {t("diverseUrbanLandscapes.list.0.description")}
              </li>
              <li>
                <strong>{t("diverseUrbanLandscapes.list.1.title")}:</strong>{" "}
                {t("diverseUrbanLandscapes.list.1.description")}
              </li>
              <li>
                <strong>{t("diverseUrbanLandscapes.list.2.title")}:</strong>{" "}
                {t("diverseUrbanLandscapes.list.2.description")}
              </li>
              <li>
                <strong>{t("diverseUrbanLandscapes.list.3.title")}:</strong>{" "}
                {t("diverseUrbanLandscapes.list.3.description")}
              </li>
            </ul>

            <h3>{t("strategicLocation.title")}</h3>
            <p>{t("strategicLocation.text")}</p>

            <h3>{t("worldClassFacilities.title")}</h3>
            <p>{t("worldClassFacilities.text1")}</p>
            <p>{t("worldClassFacilities.text2")}</p>

            <h3>{t("warmWelcome.title")}</h3>
            <p>{t("warmWelcome.text")}</p>

            <h3>{t("successStories.title")}</h3>
            <p>{t("successStories.text")}</p>

            <h3>{t("conclusion.title")}</h3>
            <p>{t("conclusion.text1")}</p>
            <p>{t("conclusion.text2")}</p>
            <p>{t("conclusion.text3")}</p>
          </article>
        </main>
      </div>
    </>
  );
};

export default Spotlight;
