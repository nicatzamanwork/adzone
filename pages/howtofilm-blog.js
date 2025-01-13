"use client";

import Image from "next/image";
import Navbar from "../app/components/Navbar";
import { useTranslation } from "react-i18next";
import "./blogPage.css";

const HowToFilm = () => {
  const { t } = useTranslation("howtofilm");

  return (
    <>
      <Navbar />
      <div className="page-container">
        <main className="content">
          <header className="header">
            <h2 className="header-title">{t("title")}</h2>
            <Image
              src="/images/Ateshgah (15).jpg"
              alt={t("headerImageAlt")}
              className="header-image"
              width={800}
              height={450}
              priority
            />
          </header>
          <article className="article">
            <p>{t("whyChoose.text0")}</p>
            <h3>{t("whyChoose.title")}</h3>

            <p>{t("whyChoose.text1")}</p>
            <p>{t("whyChoose.text2")}</p>

            <h3>{t("steps.planLocations.title")}</h3>
            <p>{t("steps.planLocations.text")}</p>

            <h4>{t("steps.planLocations.historicalSites.title")}</h4>
            <ul>
              <li>
                <strong>
                  {t("steps.planLocations.historicalSites.gobustan.title")}:
                </strong>{" "}
                {t("steps.planLocations.historicalSites.gobustan.description")}
              </li>
              <li>
                <strong>
                  {t("steps.planLocations.historicalSites.icherisheher.title")}:
                </strong>{" "}
                {t(
                  "steps.planLocations.historicalSites.icherisheher.description"
                )}
              </li>
              <li>
                <strong>
                  {t("steps.planLocations.historicalSites.ateshgah.title")}:
                </strong>{" "}
                {t("steps.planLocations.historicalSites.ateshgah.description")}
              </li>
            </ul>

            <h4>{t("steps.planLocations.naturalWonders.title")}</h4>
            <ul>
              <li>
                <strong>
                  {t("steps.planLocations.naturalWonders.khizi.title")}:
                </strong>{" "}
                {t("steps.planLocations.naturalWonders.khizi.description")}
              </li>
              <li>
                <strong>
                  {t("steps.planLocations.naturalWonders.mudVolcanoes.title")}:
                </strong>{" "}
                {t(
                  "steps.planLocations.naturalWonders.mudVolcanoes.description"
                )}
              </li>
              <li>
                <strong>
                  {t("steps.planLocations.naturalWonders.caucasus.title")}:
                </strong>{" "}
                {t("steps.planLocations.naturalWonders.caucasus.description")}
              </li>
            </ul>

            <h4>{t("steps.planLocations.modernMarvels.title")}</h4>
            <ul>
              <li>
                <strong>
                  {t("steps.planLocations.modernMarvels.heydarCenter.title")}:
                </strong>{" "}
                {t(
                  "steps.planLocations.modernMarvels.heydarCenter.description"
                )}
              </li>
              <li>
                <strong>
                  {t("steps.planLocations.modernMarvels.flameTowers.title")}:
                </strong>{" "}
                {t("steps.planLocations.modernMarvels.flameTowers.description")}
              </li>
              <li>
                <strong>
                  {t("steps.planLocations.modernMarvels.crescentBay.title")}:
                </strong>{" "}
                {t("steps.planLocations.modernMarvels.crescentBay.description")}
              </li>
            </ul>

            <h3>{t("steps.obtainPermits.title")}</h3>
            <p>{t("steps.obtainPermits.text")}</p>
            <ol>
              <li>{t("steps.obtainPermits.steps.1")}</li>
              <li>{t("steps.obtainPermits.steps.2")}</li>
              <li>{t("steps.obtainPermits.steps.3")}</li>
            </ol>

            <h3>{t("steps.partnerLocal.title")}</h3>
            <p>{t("steps.partnerLocal.text")}</p>
            {/* <ul>
              <li>{t("steps.partnerLocal.list.item1")}</li>
              <li>{t("steps.partnerLocal.list.item2")}</li>
              <li>{t("steps.partnerLocal.list.item3")}</li>
              <li>{t("steps.partnerLocal.list.item4")}</li>
              <li>{t("steps.partnerLocal.list.item5")}</li>
            </ul> */}

            <h3>{t("steps.embraceCulture.title")}</h3>
            <p>{t("steps.embraceCulture.text")}</p>
            <ul>
              <li>{t("steps.embraceCulture.list.item")}</li>
            </ul>
            <h3>{t("steps.prepareClimate.title")}</h3>
            <p>{t("steps.prepareClimate.text")}</p>
            <ul>
              <li>
                <strong>{t("steps.prepareClimate.points.urban.title")}:</strong>{" "}
                {t("steps.prepareClimate.points.urban.description")}
              </li>
              <li>
                <strong>
                  {t("steps.prepareClimate.points.mountains.title")}:
                </strong>{" "}
                {t("steps.prepareClimate.points.mountains.description")}
              </li>
              <li>
                <strong>
                  {t("steps.prepareClimate.points.deserts.title")}:
                </strong>{" "}
                {t("steps.prepareClimate.points.deserts.description")}
              </li>
            </ul>

            <h3>{t("steps.focusPost.title")}</h3>
            <p>{t("steps.focusPost.text")}</p>

            <h3>{t("steps.respectEnvironment.title")}</h3>
            <p>{t("steps.respectEnvironment.text")}</p>

            <h3>{t("landOfFire.title")}</h3>
            <p>{t("landOfFire.text")}</p>
          </article>
        </main>
      </div>
    </>
  );
};

export default HowToFilm;
