import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import breakpoints from "../config/breakpoints";
import "../css/homeScreen.scss";
import backgroundImage from "../img/Group12.png";

// Images from HomeScreen
import slide1ScreenImage from "../img/homeslides/slide1.png";
import slide2ScreenImage from "../img/homeslides/slide2.png";
import slide3ScreenImage from "../img/homeslides/slide3.png";
import slide4ScreenImage from "../img/homeslides/slide4.png";
import slide5ScreenImage from "../img/homeslides/slide5.png";
import slide6ScreenImage from "../img/homeslides/slide6.png";

// Images from IntroduceScreen
import Group75 from "../img/Group75.png";
import Group31 from "../img/Group31.png";
import Vector from "../img/Vector.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const slideImages = [
  slide1ScreenImage,
  slide2ScreenImage,
  slide3ScreenImage,
  slide4ScreenImage,
  slide5ScreenImage,
  slide6ScreenImage,
];

function parseNewlines(text, isMobile) {
  if (isMobile) {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  } else {
    return text.replace(/\n/g, " "); // 在桌面模式下，换行符被替换为空格
  }
}

function SlideContent({ slideIndex, isMobile }) {
  const { t } = useTranslation();
  const isEnglish = i18n.language === "en";
  const fontSizeMain = isMobile ? "22px" : "50px";
  const fontSizeSub = isMobile ? "18px" : "30px";
  const textAlign = isMobile ? "right" : "left";
  const textPosition1 = isMobile
    ? { right: "20px", top: isEnglish ? "80px" : "80px" }
    : { left: "142px", top: "70px" };
  const textPosition2 = isMobile
    ? { right: "20px", top: isEnglish ? "140px" : "120px" }
    : { left: "142px", top: "140px" };
  const textPosition3 = isMobile
    ? { right: "20px", top: isEnglish ? "210px" : "160px" }
    : { left: "142px", top: "220px" };
  const paddingLeft = isMobile ? "0px" : "150px";
  const paddingRight = isMobile ? "15px" : "0px";

  return (
    <div>
      <img
        className="layer1"
        src={slideImages[slideIndex]}
        alt={t("hkust_background")}
      />
      <div className="layer2 swiper-cover"></div>
      <div className="layer3">
        <div
          style={{
            color: "white",
            fontSize: fontSizeMain,
            fontFamily: "customOPPOSans",
            fontWeight: "400",
            wordWrap: "break-word",
            lineHeight: "1.3",
            width: "100%",
            textAlign: textAlign,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            ...textPosition1,
          }}
        >
          {parseNewlines(t("slide_text_line1"), isMobile)}
        </div>
        <div
          style={{
            color: "white",
            fontSize: fontSizeMain,
            fontFamily: "customOPPOSans",
            fontWeight: "400",
            wordWrap: "break-word",
            lineHeight: "1.3",
            width: "100%",
            textAlign: textAlign,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            ...textPosition2,
          }}
        >
          {parseNewlines(t("slide_text_line2"), isMobile)}
        </div>
        <div
          style={{
            color: "white",
            fontSize: fontSizeSub,
            fontFamily: "customOPPOSans",
            fontWeight: "400",
            wordWrap: "break-word",
            lineHeight: "1.3",
            width: "100%",
            textAlign: textAlign,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            ...textPosition3,
          }}
        >
          {t("hkust_quant_trading_society")}
        </div>
      </div>
    </div>
  );
}

function HomeScreen() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const [active, setActive] = useState(1); // For timeline state

  // News Data
  const newsData_2024 = t("newsData_2024", { returnObjects: true });
  const newsData_2025 = t("newsData_2025", { returnObjects: true });
  const allNewsData = active === 1 ? newsData_2024 : newsData_2025;

  const newsData = Array.isArray(allNewsData)
    ? allNewsData.filter((item) => item.title && item.title.trim() !== "")
    : [];

  // Helper for Phase Title
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
    <div>
      {/* Swiper Section */}
      <Swiper
        style={{ height: "782px" }}
        className="homeSwiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SwiperSlide key={index}>
            <SlideContent slideIndex={index} isMobile={isMobile} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Intro Section (Original Home Content) */}
      <div className="intro-section">
        <div className="intro-content">
          <div className="intro-title-primary">
            {t("hkust_quant_trading_association")}
          </div>
          <div className="intro-title-secondary">
            {t("hkust_quant_trading_society")}
          </div>
          <div className="intro-text-block">
            <span>{t("we_are")}</span>
            <span className="highlight-text">
              {" " + t("hkust_quant_trading_association2") + " "}
            </span>
            <span>{t("association_description_1")}</span>
            <br />
            <br />
            <span>{t("association_description_2")}</span>
          </div>
        </div>
        <div className="bottom-right-decoration">
          <img src={backgroundImage} alt="decoration" />
        </div>
      </div>

      {/* Mission / Vision / Culture Section (From IntroduceScreen) */}
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

      {/* Timeline Section (From IntroduceScreen) */}
      <div className="active-box">
        <div className="timeline-header">
          <div className="title">{t("activityTimelineTitle")}</div>
          <div className="time-line">
            <div
              onClick={() => setActive(2)}
              className={active === 2 ? "time active" : "time"}
            >
              2024
            </div>
            <div
              onClick={() => setActive(1)}
              className={active === 1 ? "time active" : "time"}
            >
              2025
            </div>
          </div>
        </div>

        <div className="example">
          <div className="steps">
            {Array.isArray(newsData) &&
              newsData.map((item, index) => (
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

      {/* Services Section (From IntroduceScreen) */}
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
                  {Array.isArray(
                    t("industryConnectionDetails", { returnObjects: true })
                  ) &&
                    t("industryConnectionDetails", {
                      returnObjects: true,
                    }).map((detail, index) => <li key={index}>{detail}</li>)}
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
                  {Array.isArray(
                    t("tradingStrategies", { returnObjects: true })
                  ) &&
                    t("tradingStrategies", { returnObjects: true }).map(
                      (strategy, index) => <li key={index}>{strategy}</li>
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
                  {Array.isArray(
                    t("tradingSelection", { returnObjects: true })
                  ) &&
                    t("tradingSelection", { returnObjects: true }).map(
                      (selection, index) => <li key={index}>{selection}</li>
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
                  {Array.isArray(
                    t("tradingCompetition", { returnObjects: true })
                  ) &&
                    t("tradingCompetition", { returnObjects: true }).map(
                      (competition, index) => <li key={index}>{competition}</li>
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
                  {Array.isArray(
                    t("quantFundIncubationDetails", { returnObjects: true })
                  ) &&
                    t("quantFundIncubationDetails", {
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

export default HomeScreen;
