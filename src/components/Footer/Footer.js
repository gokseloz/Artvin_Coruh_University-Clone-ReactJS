/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logoAndUni from "../../assets/images/footer/logoAndUni.png";
import "./Footer.css";
import { useTranslation } from "react-i18next";
import { ImLocation } from "react-icons/im";
import { FaPhone, FaFax, FaChevronRight } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  const copyRightYear = new Date().getFullYear();
  const [showlinks, setShowlinks] = useState(false);

  const footerLinksContainerMobile = (
    <div className="footer-links-container-mobile">
      <ul className="footer-links-list">
        <li className="footer-links-listItem">
          <a href="#">
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_virtualTour")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_promotion")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_bulletin")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_getInfo")}
          </a>
        </li>

        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_cimer")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_wireless")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_offCampusAccess")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_planeterium")}
          </a>
        </li>

        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_alumniInfo")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_personals")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_acuByNumbers")}
          </a>
        </li>
        <li className="footer-links-listItem">
          <a href="#">
            {" "}
            <FaChevronRight className="footer-rightArrow" />
            {t("footer_links_contact")}
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-main">
          <article className="footer-logo_slogan">
            <figure>
              <img src={logoAndUni} alt="logo" />
            </figure>
            <p className="footer-slogan">{t("footer_uniSlogan")}</p>
          </article>

          <article className="footer-contact">
            <h6 className="footer-contact-header">
              {t("footer_contact_header")}
            </h6>
            <address>
              <div className="footer-contact-address">
                <ImLocation className="icon icon-location" />
                <p>{t("footer_contact_desc")}</p>
              </div>
              <div className="footer-contact-phone_fax">
                <div className="footer-contact-phone">
                  <FaPhone className="icon icon-phone" />
                  {t("footer_contact_phone")}
                </div>
                <div className="footer-contact-fax">
                  <FaFax className="icon icon-fax" />
                  {t("footer_contact_fax")}
                </div>
              </div>
            </address>
          </article>

          <article className="footer-links">
            <h6
              className="footer-links-header"
              onClick={() => setShowlinks(!showlinks)}
            >
              {t("footer_links_header")}
            </h6>
            <div className="footer-links-container">
              <ul className="footer-links-list">
                <li className="footer-links-listItem">
                  <a href="#">
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_virtualTour")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_promotion")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_bulletin")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_getInfo")}
                  </a>
                </li>
              </ul>
              <ul className="footer-links-list">
                <li className="footer-links-listItem">
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_cimer")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_wireless")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_offCampusAccess")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_planeterium")}
                  </a>
                </li>
              </ul>
              <ul className="footer-links-list">
                <li className="footer-links-listItem">
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_alumniInfo")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_personals")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_acuByNumbers")}
                  </a>
                  <a href="#">
                    {" "}
                    <FaChevronRight className="footer-rightArrow" />
                    {t("footer_links_contact")}
                  </a>
                </li>
              </ul>
            </div>
            {showlinks && footerLinksContainerMobile}
          </article>
        </section>
      </div>
      <section className="footer-copyRight-container">
        <small className="footer-copyRight">
          &copy; {copyRightYear} {t("footer_copyRight")}
        </small>
      </section>
    </footer>
  );
};

export default Footer;
