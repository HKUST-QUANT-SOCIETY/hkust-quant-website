import React from "react";
import { ReactComponent as Logo } from "../img/hkust_logo_small.svg";
import { ReactComponent as Envelope } from "../img/envelope.svg";
import { ReactComponent as Linkedin } from "../img/Linkedin_logo.svg";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import breakpoints from "../config/breakpoints";
import QRCode from "../img/footerQR.jpg";
import "../css/Footer.scss"; // Import new styles

function Footer() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: breakpoints.mobile });

  return (
    <footer className="modern-footer">
      <div className="footer-content">
        {/* Brand Column */}
        <div className="footer-brand">
          <Logo className="logo-img" />
          <div className="brand-desc">
            HKUST Quant Trading Society is dedicated to empowering future
            quantitative finance leaders through knowledge sharing, networking,
            and practical competitions.
          </div>
          <div className="copyright-text">
            Copyright &copy; {new Date().getFullYear()} Quant Trading Society
            (HKUST-MAFM)
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-links">
          <div className="link-title">{t("friendLinks") || "Friend Links"}</div>
          <ul>
            <li>
              <a
                href="https://mafm.hkust.edu.hk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                HKUST MAFM
              </a>
            </li>
            <li>
              <a
                href="https://mafm.hkust.edu.hk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Crypto-Fintech Lab
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <div className="contact-title">Contact Us</div>
          <div className="contact-item">
            <Envelope className="icon" />
            <div className="info">
              <span>official@ustquant.hk</span>
              <span>secretary@ustquant.hk</span>
            </div>
          </div>
          <div className="contact-item">
            <Linkedin className="icon" />
            <div className="info">
              <a
                href="https://www.linkedin.com/company/ust-quant-trading-society-limitted/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow us on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Social / QR Column */}
        <div className="footer-social">
          <div className="link-title">WeChat</div>
          <div className="qr-box">
            <div
              className="qr-img"
              style={{ backgroundImage: `url(${QRCode})` }}
            ></div>
          </div>
          <div className="social-label">Scan to follow us</div>
        </div>
      </div>

      <div className="footer-bottom">All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;
