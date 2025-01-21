"use client";

import Image from "next/image";
import Navbar from "../app/components/Navbar";
import { useTranslation } from "react-i18next";
import "./blogPage.css"; // global stylesheets

const Petroglyphs = () => {
  const { t } = useTranslation("petroglyphs");

  return (
    <>
      <meta
        name="description"
        content="Filmworks provides high-quality video production services. Contact us today for your project needs."
      />
      <title>Filming Landscapes - Capturing Stunning Outdoor Scenes</title>

      <Navbar />
      <div className="page-container">
        <main className="content">
          <header className="header">
            <h2 className="header-title">{t("title")}</h2>
            <Image
              src="/images/land.JPG"
              alt={t("headerImageAlt")}
              className="header-image"
              width={800}
              height={450}
              priority
            />
          </header>
          <article className="article">
            <p>{t("intro.paragraph1")}</p>

            <h2>{t("gobustan.title")}</h2>
            <p>{t("gobustan.paragraph1")}</p>
            <p>{t("gobustan.paragraph2")}</p>

            <h2>{t("palaces.title")}</h2>
            <p>{t("palaces.intro")}</p>
            <ul>
              <li>
                <strong>{t("palaces.list.0.title")}:</strong>{" "}
                {t("palaces.list.0.description")}
              </li>
              <li>
                <strong>{t("palaces.list.1.title")}:</strong>{" "}
                {t("palaces.list.1.description")}
              </li>
            </ul>

            <h2>{t("coastline.title")}</h2>
            <ul>
              <li>
                <strong>{t("coastline.list.0.title")}:</strong>{" "}
                {t("coastline.list.0.description")}
              </li>
              <li>
                <strong>{t("coastline.list.1.title")}:</strong>{" "}
                {t("coastline.list.1.description")}
              </li>
            </ul>

            <h2>{t("naturalWonders.title")}</h2>
            <ul>
              <li>{t("naturalWonders.list.0.description")}</li>
              <li>
                <strong>{t("naturalWonders.list.1.title")}:</strong>{" "}
                {t("naturalWonders.list.1.description")}
              </li>
              <li>
                <strong>{t("naturalWonders.list.2.title")}:</strong>{" "}
                {t("naturalWonders.list.2.description")}
              </li>
              <li>
                <strong>{t("naturalWonders.list.3.title")}:</strong>{" "}
                {t("naturalWonders.list.3.description")}
              </li>
              <li>
                <strong>{t("naturalWonders.list.4.title")}:</strong>{" "}
                {t("naturalWonders.list.4.description")}
              </li>
              <li>
                <strong>{t("naturalWonders.list.5.title")}:</strong>{" "}
                {t("naturalWonders.list.5.description")}
              </li>
            </ul>

            <h2>{t("modernMarvels.title")}</h2>
            <ul>
              <li>
                <strong>{t("modernMarvels.list.0.title")}:</strong>{" "}
                {t("modernMarvels.list.0.description")}
              </li>
              <li>
                <strong>{t("modernMarvels.list.1.title")}:</strong>{" "}
                {t("modernMarvels.list.1.description")}
              </li>
              <li>
                <strong>{t("modernMarvels.list.2.title")}:</strong>{" "}
                {t("modernMarvels.list.2.description")}
              </li>
            </ul>

            <h2>{t("conclusion.title")}</h2>
            <p>{t("conclusion.paragraph")}</p>
          </article>
        </main>
      </div>
    </>
  );
};

export default Petroglyphs;
