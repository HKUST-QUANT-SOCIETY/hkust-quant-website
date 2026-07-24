import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../components/LanguageContext";
import { useMediaQuery } from "react-responsive";
import breakpoints from "../config/breakpoints";
import "../css/navbar.scss"; // Modern CSS

// Images & Icons
import { ReactComponent as Logo } from "../img/hkust_logo.svg";
import { ReactComponent as Title } from "../img/Header-title_MAFM.svg";
import quantSocietyLogo from "../img/quant_society_logo.png";
import { ReactComponent as Earth } from "../img/globe-americas.svg";
import { ReactComponent as Triangle } from "../img/caret-down-fill.svg";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { changeLanguage } = useLanguage();
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const isCustomMobile = useMediaQuery({ query: "(max-width: 1200px)" });

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    alumni: false,
    language: false,
  });

  // Toggle Mobile Menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle Mobile Submenu
  const toggleMobileDropdown = (key) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Close menu on outside click
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        isMenuOpen &&
        !e.target.closest(".mobile-sidebar") &&
        !e.target.closest(".mobile-menu-btn")
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, [isMenuOpen]);

  return (
    <div className="navbar-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-text">Quant Trading Society (HKUST-MAFM)</div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav-container">
        {/* Logo Group */}
        <div className="logo-group">
          <Link to="/">
            <Logo
              className="logo-icon"
              style={{
                width: isMobile ? "80px" : "200px",
              }}
            />
          </Link>
          <div className="logo-divider"></div>
          <Link to="/">
            <Title
              className="logo-icon"
              style={{
                width: isMobile ? "80px" : "160px",
                height: isMobile ? "28px" : "50px",
              }}
            />
          </Link>
          <div className="logo-divider"></div>
          <Link to="/">
            <img
              src={quantSocietyLogo}
              alt="QS Logo"
              className="logo-icon quant-logo"
              style={{ height: isMobile ? "80px" : "130px", width: "auto" }}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          {/* About Us Dropdown */}
          <div className="nav-item">
            <NavLink to="#" className="nav-link">
              {t("aboutUs")}{" "}
              <Triangle style={{ width: "10px", marginLeft: "5px" }} />
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/AboutUs" className="dropdown-link">
                {t("team")}
              </NavLink>
              <NavLink to="/Introduce" className="dropdown-link">
                {t("introduction")}
              </NavLink>
            </div>
          </div>

          <div className="nav-item">
            <NavLink to="/ResearchDirections" className="nav-link">
              {t("researchDirectionsTitle")}
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink to="/TradingCompetition" className="nav-link">
              {t("tradingCompetitionNav")}
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink to="/SocialAdvisor" className="nav-link">
              {t("socialAdvisor")}
            </NavLink>
          </div>

          <div className="nav-item">
            <NavLink to="/partner" className="nav-link">
              {t("partnersNav")}
            </NavLink>
          </div>

          {/* Alumni Dropdown */}
          <div className="nav-item">
            <NavLink to="#" className="nav-link">
              {t("alumni")}{" "}
              <Triangle style={{ width: "10px", marginLeft: "5px" }} />
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/Alumni/Hongkong" className="dropdown-link">
                {t("alumniHongKong")}
              </NavLink>
              <NavLink to="/Alumni/Beijing" className="dropdown-link">
                {t("alumniBeijing")}
              </NavLink>
              <NavLink to="/Alumni/Shanghai" className="dropdown-link">
                {t("alumniShanghai")}
              </NavLink>
              <NavLink to="/Alumni/Guangzhou" className="dropdown-link">
                {t("alumniGuangzhou")}
              </NavLink>
              <NavLink to="/Alumni/Shenzhen" className="dropdown-link">
                {t("alumniShenzhen")}
              </NavLink>
            </div>
          </div>

          {/* Language Selector */}
          <div className="nav-item">
            <div className="lang-selector nav-link">
              <Earth className="earth-icon" />{" "}
              <Triangle style={{ width: "10px" }} />
            </div>
            <div className="dropdown-content" style={{ minWidth: "120px" }}>
              <div
                className="dropdown-link"
                onClick={() => changeLanguage("en")}
              >
                English
              </div>
              <div
                className="dropdown-link"
                onClick={() => changeLanguage("tc")}
              >
                繁體中文
              </div>
              <div
                className="dropdown-link"
                onClick={() => changeLanguage("zh")}
              >
                简体中文
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div
          className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-list">
          {/* About Us Mobile */}
          <div className="mobile-nav-item">
            <div
              className="mobile-dropdown-header"
              onClick={() => toggleMobileDropdown("about")}
            >
              {t("aboutUs")}{" "}
              <Triangle
                style={{
                  transform: mobileDropdowns.about
                    ? "rotate(180deg)"
                    : "rotate(0)",
                }}
              />
            </div>
            <div
              className={`mobile-sub-menu ${
                mobileDropdowns.about ? "open" : ""
              }`}
            >
              <NavLink
                to="/AboutUs"
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                {t("team")}
              </NavLink>
              <NavLink
                to="/Introduce"
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                {t("introduction")}
              </NavLink>
            </div>
          </div>

          <div className="mobile-nav-item">
            <NavLink
              to="/ResearchDirections"
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              {t("researchDirectionsTitle")}
            </NavLink>
          </div>

          <div className="mobile-nav-item">
            <NavLink
              to="/TradingCompetition"
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              {t("tradingCompetitionNav")}
            </NavLink>
          </div>
          <div className="mobile-nav-item">
            <NavLink
              to="/SocialAdvisor"
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              {t("socialAdvisor")}
            </NavLink>
          </div>
          <div className="mobile-nav-item">
            <NavLink
              to="/partner"
              className="mobile-nav-link"
              onClick={toggleMenu}
            >
              {t("partnersNav")}
            </NavLink>
          </div>

          {/* Alumni Mobile */}
          <div className="mobile-nav-item">
            <div
              className="mobile-dropdown-header"
              onClick={() => toggleMobileDropdown("alumni")}
            >
              {t("alumni")}{" "}
              <Triangle
                style={{
                  transform: mobileDropdowns.alumni
                    ? "rotate(180deg)"
                    : "rotate(0)",
                }}
              />
            </div>
            <div
              className={`mobile-sub-menu ${
                mobileDropdowns.alumni ? "open" : ""
              }`}
            >
              <NavLink
                to="/Alumni/Hongkong"
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                {t("alumniHongKong")}
              </NavLink>
              <NavLink
                to="/Alumni/Beijing"
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                {t("alumniBeijing")}
              </NavLink>
              <NavLink
                to="/Alumni/Shanghai"
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                {t("alumniShanghai")}
              </NavLink>
              <NavLink
                to="/Alumni/Guangzhou"
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                {t("alumniGuangzhou")}
              </NavLink>
              <NavLink
                to="/Alumni/Shenzhen"
                className="mobile-sub-link"
                onClick={toggleMenu}
              >
                {t("alumniShenzhen")}
              </NavLink>
            </div>
          </div>

          {/* Language Mobile */}
          <div className="mobile-nav-item">
            <div
              className="mobile-dropdown-header"
              onClick={() => toggleMobileDropdown("language")}
            >
              <span>Language / 语言</span> <Earth style={{ width: "16px" }} />
            </div>
            <div
              className={`mobile-sub-menu ${
                mobileDropdowns.language ? "open" : ""
              }`}
            >
              <div
                className="mobile-sub-link"
                onClick={() => {
                  changeLanguage("en");
                  toggleMenu();
                }}
              >
                English
              </div>
              <div
                className="mobile-sub-link"
                onClick={() => {
                  changeLanguage("tc");
                  toggleMenu();
                }}
              >
                繁體中文
              </div>
              <div
                className="mobile-sub-link"
                onClick={() => {
                  changeLanguage("zh");
                  toggleMenu();
                }}
              >
                简体中文
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
