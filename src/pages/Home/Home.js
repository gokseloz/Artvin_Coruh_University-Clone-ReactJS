import React from "react";
import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context";
import { ExternalLink } from "react-external-link";
import i18n from "i18next";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaGlobe,
} from "react-icons/fa";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactCountryFlag from "react-country-flag";
import Select from "react-select";
import "./Home.css";
import i18next from "i18next";

const languages = [
  {
    id: 1,
    code: "en",
    name: "English",
    country_code: "US",
  },
  {
    id: 2,
    code: "tr",
    name: "Türkçe",
    country_code: "TR",
  },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="header">
        {/* <p>{t("ArtvinUniName")}</p> */}
        <div className="header-container">
          <div className="header-top">
            <div className="header-socialMediaButtons">
              <ExternalLink
                href="https://www.facebook.com/ArtvinCoruhUnv"
                className="header-socialMediaLink"
              >
                <FaFacebookSquare className="header-socialMediaIcon" />
              </ExternalLink>

              <ExternalLink
                href="https://twitter.com/ArtvinCoruhUnv"
                className="header-socialMediaLink"
              >
                <FaTwitterSquare className="header-socialMediaIcon" />
              </ExternalLink>

              <ExternalLink
                href="https://www.youtube.com/user/ArtvinCoruhUnv"
                className="header-socialMediaLink"
              >
                <FaYoutubeSquare className="header-socialMediaIcon" />
              </ExternalLink>

              <ExternalLink
                href="https://www.instagram.com/artvincoruhunv/"
                className="header-socialMediaLink"
              >
                <FaInstagram className="header-socialMediaIcon" />
              </ExternalLink>
            </div>

            <div className="header-languageSelector">
              <DropdownButton
                id="dropdown-basic-button"
                title={<FaGlobe />}
                className="languageSelector-btn"
              >
                {languages.map((lang) => {
                  const { id, code, name, country_code } = lang;
                  return (
                    <Dropdown.Item
                      key={id}
                      onClick={() => i18next.changeLanguage(code)}
                    >
                      <ReactCountryFlag
                        countryCode={country_code}
                        svg
                        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                        cdnSuffix="svg"
                        title={name}
                        className="languageSelector-flag"
                      />
                      {name}
                    </Dropdown.Item>
                  );
                })}
              </DropdownButton>
            </div>
          </div>
          <div className="header-main"></div>
          <nav className="header-nav"></nav>
        </div>
      </header>
    </>
  );
};

export default Home;
