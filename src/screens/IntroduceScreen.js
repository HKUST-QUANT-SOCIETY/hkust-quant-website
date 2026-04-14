import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/introduce.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Group85 from "../img/Group85.png";
import Group75 from "../img/Group75.png";
import Group31 from "../img/Group31.png";
import Vector from "../img/Vector.png";
import { useMediaQuery } from "react-responsive";
import breakpoints from "../config/breakpoints";

function IntroduceScreen() {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(3);

  const newsData_2024 = t("newsData_2024", { returnObjects: true });
  const newsData_2025 = t("newsData_2025", { returnObjects: true });
  const newsData_2026 = t("newsData_2026", { returnObjects: true });
  const isMobile = useMediaQuery({ query: breakpoints.mobile });

  if (!Array.isArray(newsData_2024) || !Array.isArray(newsData_2025) || !Array.isArray(newsData_2026)) {
    console.error("News data is not an array:", {
      newsData_2024,
      newsData_2025,
      newsData_2026,
    });
    return (
      <div>
        Error loading news data. Please check your translation configuration.
      </div>
    );
  }

  const newsData =
    active === 1 ? newsData_2024 : active === 2 ? newsData_2025 : newsData_2026;

  function getPhaseTitle(
    simplifiedChineseTitle,
    traditionalChineseTitle,
    englishTitle
  ) {
    switch (i18n.language) {
      case "zh":
        return simplifiedChineseTitle;
      case "tc":
        return traditionalChineseTitle;
      case "en":
      default:
        return englishTitle;
    }
  }

  return (
    <div className="introduce">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <h1 className="h1">{t("introduceTitle")}</h1>
          <p className="label">{t("hkustQuantTradingSociety")}</p>
          <p className="info">{t("empowerFutureQuantLeaders")}</p>
        </div>
      </div>

      {/* Mission / Vision / Culture Section */}
      <div className="container-box">
        <div className="box">
          <div className="container-item">
            <div className="title">{t("missionTitle")}</div>
            <div className="line-img"></div>
            <img src={Group75} className="big-img" alt="mission icon" />
            <p className="text">{t("missionText")}</p>
          </div>
          <div className="container-item">
            <div className="title">{t("visionTitle")}</div>
            <div className="line-img"></div>
            <img src={Vector} className="big-img" alt="vision icon" />
            <p className="text">{t("visionText")}</p>
          </div>
          <div className="container-item">
            <div className="title">{t("cultureTitle")}</div>
            <div className="line-img"></div>
            <img src={Group31} className="big-img" alt="culture icon" />
            <p className="text">{t("cultureText")}</p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="active-box">
        <div className="timeline-header">
          <div className="title">{t("activityTimelineTitle")}</div>
          <div className="time-line">
            <div
              onClick={() => setActive(1)}
              className={active === 1 ? "time active" : "time"}
            >
              2024
            </div>
            <div
              onClick={() => setActive(2)}
              className={active === 2 ? "time active" : "time"}
            >
              2025
            </div>
            <div
              onClick={() => setActive(3)}
              className={active === 3 ? "time active" : "time"}
            >
              2026
            </div>
          </div>
        </div>

        <div className="example">
          <div className="steps">
            {newsData.map((item, index) => (
              <div className="step" key={item.id || index}>
                <div className="step__head">
                  <div className="step__top">
                    <div className="step__title">{item.title}</div>
                    <div className="step__small_title">{item.small}</div>
                  </div>
                </div>
                <div className="step__bottom">
                  <div className="step__description">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services">
        <div className="section-header">
          <div className="title">{t("mainServicesTitle")}</div>
        </div>

        <div className="services-grid">
          {/* Industry Connection */}
          <div className="services-item">
            <div className="big-title">
              <p className="title">{t("industryConnectionTitle")}</p>
              {i18n.language !== "en" && (
                <span className="label">{t("industryConnectionLabel")}</span>
              )}
            </div>
            <div className="content-area">
              <div>
                <ul className="ul">
                  {t("industryConnectionDetails", {
                    returnObjects: true,
                  }).map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Trading Competition */}
          <div className="services-item">
            <div className="big-title">
              <p className="title">{t("tradingCompetitionTitle")}</p>
              {i18n.language !== "en" && (
                <span className="label">{t("Trading Competition")}</span>
              )}
            </div>
            <div className="content-area">
              <div>
                <div className="small-title">
                  {getPhaseTitle(
                    "策略阶段 Strategies",
                    "策略階段 Strategies",
                    "Strategies"
                  )}
                </div>
                <ul className="ul">
                  {t("tradingStrategies", { returnObjects: true }).map(
                    (strategy, index) => (
                      <li key={index}>{strategy}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <div className="small-title">
                  {getPhaseTitle(
                    "选择阶段 Selection",
                    "選擇階段 Selection",
                    "Selection"
                  )}
                </div>
                <ul className="ul">
                  {t("tradingSelection", { returnObjects: true }).map(
                    (selection, index) => (
                      <li key={index}>{selection}</li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <div className="small-title">
                  {getPhaseTitle(
                    "比赛阶段 Competition",
                    "比賽階段 Competition",
                    "Competition"
                  )}
                </div>
                <ul className="ul">
                  {t("tradingCompetition", { returnObjects: true }).map(
                    (competition, index) => (
                      <li key={index}>{competition}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Quant Fund Incubation */}
          <div className="services-item">
            <div className="big-title">
              <p className="title">{t("quantFundIncubationTitle")}</p>
              {i18n.language !== "en" && (
                <span className="label">{t("quantFundIncubationLabel")}</span>
              )}
            </div>
            <div className="content-area">
              <div>
                <ul className="ul">
                  {t("quantFundIncubationDetails", {
                    returnObjects: true,
                  }).map((incubation, index) => (
                    <li key={index}>{incubation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroduceScreen;
