"use client";

import Image from "next/image";
import Navbar from "../app/components/Navbar";
import { useTranslation } from "react-i18next";
import "./blogPage.css"; // global stylesheet

const TenBestFilm = () => {
  const { t } = useTranslation("tenBestFilm");

  return (
    <>
      <Navbar />
      <div className="page-container">
        <main className="content">
          <header className="header">
            <h2 className="header-title">{t("title")}</h2>
            <Image
              src="/images/Khinalig (12) (1).jpg"
              alt={t("headerImageAlt")}
              width={800}
              height={450}
              priority
              className="header-image"
            />
          </header>
          <article className="article">
            <p> {t("locations.0.text")}</p>
            <h3>{t("locations.0.title")}</h3>
            <p>{t("locations.0.description")}</p>
            {t("locations.0.highlight") && (
              <p>
                <strong>{t("locations.0.highlight.label")}:</strong>{" "}
                {t("locations.0.highlight.text")}
              </p>
            )}

            <h3>{t("locations.1.title")}</h3>
            <p>{t("locations.1.description")}</p>
            {t("locations.1.highlight") && (
              <p>
                <strong>{t("locations.1.highlight.label")}:</strong>{" "}
                {t("locations.1.highlight.text")}
              </p>
            )}

            <h3>{t("locations.2.title")}</h3>
            <p>{t("locations.2.description")}</p>
            {t("locations.2.highlight") && (
              <p>
                <strong>{t("locations.2.highlight.label")}:</strong>{" "}
                {t("locations.2.highlight.text")}
              </p>
            )}

            <h3>{t("locations.3.title")}</h3>
            <p>{t("locations.3.description")}</p>
            {t("locations.3.highlight") && (
              <p>
                <strong>{t("locations.3.highlight.label")}:</strong>{" "}
                {t("locations.3.highlight.text")}
              </p>
            )}

            <h3>{t("locations.4.title")}</h3>
            <p>{t("locations.4.description")}</p>
            {t("locations.4.highlight") && (
              <p>
                <strong>{t("locations.4.highlight.label")}:</strong>{" "}
                {t("locations.4.highlight.text")}
              </p>
            )}

            <h3>{t("locations.5.title")}</h3>
            <p>{t("locations.5.description")}</p>
            {t("locations.5.highlight") && (
              <p>
                <strong>{t("locations.5.highlight.label")}:</strong>{" "}
                {t("locations.5.highlight.text")}
              </p>
            )}

            <h3>{t("locations.6.title")}</h3>
            <p>{t("locations.6.description")}</p>

            <h3>{t("locations.7.title")}</h3>
            <p>{t("locations.7.description")}</p>
            {t("locations.7.highlight") && (
              <p>
                <strong>{t("locations.7.highlight.label")}:</strong>{" "}
                {t("locations.7.highlight.text")}
              </p>
            )}

            <h3>{t("locations.8.title")}</h3>
            <p>{t("locations.8.description")}</p>

            <h3>{t("locations.9.title")}</h3>
            <p>{t("locations.9.description")}</p>
            {/* {t("locations.9.highlight") && (
              <p>
                <strong>{t("locations.9.highlight.label")}:</strong>{" "}
                {t("locations.9.highlight.description")}
              </p>
            )} */}

            <h3>{t("conclusion.title")}</h3>
            <p>{t("conclusion.text")}</p>
            <p>
              <strong>{t("conclusion.plan.label")}:</strong>{" "}
              {t("conclusion.plan.text")}
            </p>
          </article>
        </main>
      </div>
    </>
  );
};

export default TenBestFilm;
