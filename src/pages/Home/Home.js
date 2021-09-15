import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { useGlobalContext } from "../../context";
import "bootstrap/dist/css/bootstrap.min.css";

import { ExternalLink } from "react-external-link";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaGlobe,
  FaSearch,
  FaCaretDown,
  FaCaretRight,
  FaCaretLeft,
} from "react-icons/fa";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ReactCountryFlag from "react-country-flag";
import i18next from "i18next";
import Logo from "../../assets/images/artvin.png";
import "./Home.css";

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
        <div className="header-container">
          <div className="header-applicantStudent">
            <span>{t("header_applicantStudentTop")}</span>
            <span>{t("header_applicantStudentBottom")}</span>
          </div>
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
          <div className="header-main">
            <div className="header-logoName">
              <figure>
                <img src={Logo} alt="logo" className="header-logo" />
              </figure>
              <div className="header-headline">
                <h1>{t("header_head")}</h1>
                <p>{t("header_subHead")}</p>
              </div>
            </div>

            <form
              action="https://www.artvin.edu.tr/arama"
              method="GET"
              className="header-searchForm"
            >
              <input
                className="header-searchBox"
                type="text"
                placeholder={t("header_searchPlaceHolder")}
              />
              <FaSearch className="header-searchIcon" />
            </form>
          </div>
          <Navbar>
            <NavItem />
          </Navbar>
        </div>
      </header>
    </>
  );
};

const Navbar = ({ children }) => {
  return (
    <nav className="header-navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

const NavItem = () => {
  const { t } = useTranslation();
  const menu = [
    {
      id: 1,
      title: t("header_nav_university"),
      subMenu: [
        {
          id: 1,
          title: t("header_nav_university_generalInfo"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_university_generalInfo_acuByNumbers"),
              link: "/sayilarla-acu",
            },
            {
              id: 2,
              title: t("header_nav_university_generalInfo_aboutUni"),
              link: "/universitemiz-hakkinda",
            },
            {
              id: 3,
              title: t("header_nav_university_generalInfo_history"),
              link: "/tarihce",
            },
            {
              id: 4,
              title: t("header_nav_university_generalInfo_missionAndVision"),
              link: "/misyon-ve-vizyon",
            },
            {
              id: 5,
              title: t("header_nav_university_generalInfo_institutionalStatue"),
              link: "/kurumsal-mevzuat",
            },
            {
              id: 6,
              title: t("header_nav_university_generalInfo_newsletter"),
              link: "/universite-bulteni",
            },
            {
              id: 7,
              title: t("header_nav_university_generalInfo_universityByPhotos"),
              link: "/fotograflarla-universitemiz",
            },
            {
              id: 7,
              title: t("header_nav_university_generalInfo_introductoryVideo"),
              link: "/tanitim-videosu",
            },
            {
              id: 8,
              title: t(
                "header_nav_university_generalInfo_introductoryBrochure"
              ),
              link: "/tanitim-brosurleri",
            },
          ],
        },
        {
          id: 2,
          title: t("header_nav_university_administration"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_university_administration_rector"),
              link: "/rektor",
            },
            {
              id: 2,
              title: t("header_nav_university_administration_viceRectors"),
              link: "/rektor-yardimcilari",
            },
            {
              id: 3,
              title: t(
                "header_nav_university_administration_administrativeBoard"
              ),
              link: "/yonetim-kurulu",
            },
            {
              id: 4,
              title: t("header_nav_university_administration_senate"),
              link: "/senato",
            },
            {
              id: 5,
              title: t("header_nav_university_administration_advisorsToRector"),
              link: "/rektor-danismanlari",
            },
            {
              id: 6,
              title: t(
                "header_nav_university_administration_organizationChart"
              ),
              link: "/organizasyon-semasi",
            },
            {
              id: 7,
              title: t("header_nav_university_administration_contact"),
              link: "/iletisim",
            },
          ],
        },
        {
          id: 3,
          title: t("header_nav_university_administrativeUnits"),
          subMenu: [
            {
              id: 1,
              title: t(
                "header_nav_university_administrativeUnits_generalSecretariat"
              ),
              link: "/genel-sekreterlik",
            },
            {
              id: 2,
              title: t(
                "header_nav_university_administrativeUnits_directorates"
              ),
              subMenu: [
                {
                  id: 1,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_computing"
                  ),
                  link: "/bilgi-islem",
                },
                {
                  id: 2,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_financial"
                  ),
                  link: "/idari-mali",
                },
                {
                  id: 3,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_strategy"
                  ),
                  link: "/strateji-gelistirme",
                },
                {
                  id: 4,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_health"
                  ),
                  link: "/saglik-kultur-spor",
                },
                {
                  id: 5,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_construction"
                  ),
                  link: "/yapi-isleri",
                },
                {
                  id: 6,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_personnel"
                  ),
                  link: "/personel-daire",
                },
                {
                  id: 7,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_student"
                  ),
                  link: "/ogrenci-isleri",
                },
                {
                  id: 8,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_library"
                  ),
                  link: "/bilgi-islem",
                },
                {
                  id: 9,
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_legalCounselor"
                  ),
                  link: "/hukuk-musavirligi",
                },
              ],
            },
            {
              id: 3,
              title: t(
                "header_nav_university_administrativeUnits_internationalAffairs"
              ),
              link: "/dis-iliskiler-uam",
            },
            {
              id: 4,
              title: t(
                "header_nav_university_administrativeUnits_internalAudit"
              ),
              link: "/ic-denetim",
            },
          ],
        },
        {
          id: 4,
          title: t("header_nav_university_qualityEnsurance"),
          link: "kalite-guvence-sistemi",
        },
        {
          id: 5,
          title: t("header_nav_university_visualIdentity"),
          link: "gorsel-kimlik",
        },
        {
          id: 6,
          title: t("header_nav_university_institutionalIdentity"),
          link: "kurumsal-kimlik",
        },
        {
          id: 7,
          title: t("header_nav_university_stakeholderSurvey"),
          link: "dis-paydas-anketi",
        },
        {
          id: 8,
          title: t("header_nav_university_campus"),
          link: "yerleskeler",
        },
      ],
    },
    {
      id: 2,
      title: t("header_nav_academics"),
      subMenu: [
        {
          id: 1,
          title: t("header_nav_academics_faculties"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_academics_faculties_education"),
              link: "/egitim-fakultesi",
            },
            {
              id: 2,
              title: t("header_nav_academics_faculties_science"),
              link: "/fen-edebiyat-fakultesi",
            },
            {
              id: 3,
              title: t("header_nav_academics_faculties_enginnering"),
              link: "/muhendislik-fakultesi",
            },
            {
              id: 4,
              title: t("header_nav_academics_faculties_forestry"),
              link: "/orman-fakultesi",
            },
            {
              id: 5,
              title: t("header_nav_academics_faculties_theology"),
              link: "/ilahiyat-fakultesi",
            },
            {
              id: 6,
              title: t("header_nav_academics_faculties_economics"),
              link: "/hopa-iktisadi-ve-idari-bilimler-fakultesi",
            },
            {
              id: 7,
              title: t("header_nav_academics_faculties_artandDesign"),
              link: "/sanat-ve-tasarim-fakultesi",
            },
            {
              id: 8,
              title: t("header_nav_academics_faculties_health"),
              link: "/saglik-bilimleri-fakultesi",
            },
            {
              id: 9,
              title: t("header_nav_academics_faculties_management"),
              link: "/isletme-fakultesi",
            },
          ],
        },
        {
          id: 2,
          title: t("header_nav_academics_enstitutions"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_academics_enstitutions_master"),
              link: "/lisansustu-egitim-enstitusu",
            },
          ],
        },
        {
          id: 3,
          title: t("header_nav_academics_graduateSchools"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_academics_graduateSchools_sports"),
              link: "/beden-egitimi-ve-spor-yuksek-okulu",
            },
            {
              id: 2,
              title: t("header_nav_academics_graduateSchools_appliedSciences"),
              link: "/uygulamali-bilimler-yuksek-okulu",
            },
          ],
        },
        {
          id: 4,
          title: t("header_nav_academics_vocationalSchools"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_academics_vocationalSchools_artvin"),
              link: "/artvin-meslek-yuksek-okulu",
            },
            {
              id: 2,
              title: t("header_nav_academics_vocationalSchools_arhavi"),
              link: "/arhavi-meslek-yuksek-okulu",
            },
            {
              id: 3,
              title: t("header_nav_academics_vocationalSchools_borcka"),
              link: "/borcka-acarlar-meslek-yuksek-okulu",
            },
            {
              id: 4,
              title: t("header_nav_academics_vocationalSchools_hopa"),
              link: "/hopa-meslek-yuksek-okulu",
            },
            {
              id: 5,
              title: t("header_nav_academics_vocationalSchools_health"),
              link: "/saglik-hizmetleri-meslek-yuksek-okulu",
            },
            {
              id: 6,
              title: t("header_nav_academics_vocationalSchools_savsat"),
              link: "/savsat-meslek-yuksek-okulu",
            },
            {
              id: 7,
              title: t("header_nav_academics_vocationalSchools_yusufeli"),
              link: "/yusufeli-meslek-yuksek-okulu",
            },
          ],
        },
        {
          id: 5,
          title: t("header_nav_academics_coordinators"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_academics_coordinators_communication"),
              link: "/kurumsal-iletisim-koordinatorlugu",
            },
            {
              id: 2,
              title: t("header_nav_academics_coordinators_ylysScholarship"),
              link: "/ylys-burs-programi-koordinatorlugu",
            },
            {
              id: 3,
              title: t("header_nav_academics_coordinators_bap"),
              link: "/bap",
            },
            {
              id: 4,
              title: t("header_nav_academics_coordinators_erasmus"),
              link: "/erasmus",
            },
            {
              id: 5,
              title: t("header_nav_academics_coordinators_farabi"),
              link: "/farabi",
            },
            {
              id: 6,
              title: t("header_nav_academics_coordinators_mevlana"),
              link: "/mevlana",
            },
            {
              id: 7,
              title: t("header_nav_academics_coordinators_osym"),
              link: "/osym",
            },
            {
              id: 8,
              title: t("header_nav_academics_coordinators_occupationalHealth"),
              link: "/is-sagligi-ve-guvenligi",
            },
            {
              id: 9,
              title: t("header_nav_academics_coordinators_graduates"),
              link: "/mezunlar-koordinatorlugu",
            },
            {
              id: 10,
              title: t("header_nav_academics_coordinators_aof"),
              link: "/aof",
            },
            {
              id: 11,
              title: t(
                "header_nav_academics_coordinators_digitalTransformation"
              ),
              link: "/digital-donusum",
            },
            {
              id: 12,
              title: t("header_nav_academics_coordinators_aromaticPlants"),
              link: "/kalite",
            },
            {
              id: 13,
              title: t("header_nav_academics_rectorShipDepartments"),
              link: "/tibbi-aromatik-bitkiler-ihtisaslama-koordinatorlugu",
            },
          ],
        },
        {
          id: 6,
          title: t("header_nav_academics_rectorShipDepartments"),
          link: "rektorluge-bagli-bolumler",
        },
      ],
    },
    {
      id: 3,
      title: t("header_nav_student"),
      subMenu: [
        {
          id: 1,
          title: t("header_nav_student_eTransactions"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_student_eTransactions_studentInfo"),
              link: "/ogrenci-bilgi-sistemi",
            },
            {
              id: 2,
              title: t("header_nav_student_eTransactions_studentId"),
              link: "/ogrenci-numarasi-sorgulama",
            },
            {
              id: 3,
              title: t("header_nav_student_eTransactions_alumniInfo"),
              link: "/mezun-bilgi-sistemi",
            },
            {
              id: 4,
              title: t("header_nav_student_eTransactions_courseMaterials"),
              link: "/ulusal-acik-ders-malzemeleri",
            },
          ],
        },
        {
          id: 2,
          title: t("header_nav_student_presentation"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_student_presentation_programs"),
              link: "/programlar-hakkinda-bilgi",
            },
            {
              id: 2,
              title: t("header_nav_student_presentation_brochure"),
              link: "/universite-tanitim-brosurleri",
            },
            {
              id: 3,
              title: t("header_nav_student_presentation_prospectiveStudents"),
              link: "/aday-ogrenciler",
            },
            {
              id: 4,
              title: t("header_nav_student_presentation_universityByPhotos"),
              link: "/fotograflarla-universitemiz",
            },
          ],
        },
        {
          id: 3,
          title: t("header_nav_student_general"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_student_general_regulations"),
              link: "/yonetmelikler",
            },
            {
              id: 2,
              title: t("header_nav_student_general_academicCalendar"),
              link: "/akademik-takvim",
            },
            {
              id: 3,
              title: t("header_nav_student_general_studentCouncil"),
              link: "/ogrenci-konsey-baskanligi",
            },
            {
              id: 4,
              title: t("header_nav_student_general_studentNumbers"),
              link: "/ogrenci-sayilari",
            },
          ],
        },
        {
          id: 4,
          title: t("header_nav_student_disabledStudent"),
          link: "/engelli-ogrenci-birimi",
        },
        {
          id: 5,
          title: t("header_nav_student_general_jobsCareer"),
          link: "/kariyer-merkezi",
        },
      ],
    },
    {
      id: 4,
      title: t("header_nav_research"),
      subMenu: [
        {
          id: 1,
          title: t("header_nav_research_research"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_research_research_library"),
              link: "/kutuphane",
            },
            {
              id: 2,
              title: t("header_nav_research_research_herbarium"),
              link: "/herbaryum-arth",
            },
            {
              id: 3,
              title: t("header_nav_research_research_srp"),
              link: "/bap",
            },
            {
              id: 4,
              title: t("header_nav_research_research_laboratoryInfra"),
              link: "/laboratuvar-altyapisi",
            },
            {
              id: 5,
              title: t("header_nav_research_research_researcherDatabase"),
              link: "/arastirmaci-veritabani",
            },
            {
              id: 6,
              title: t("header_nav_research_research_ethicsCommittee"),
              link: "/etik-kurul",
            },
          ],
        },
        {
          id: 2,
          title: t("header_nav_research_journals"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_research_journals_socialSciences"),
              link: "external link",
            },
            {
              id: 2,
              title: t("header_nav_research_journals_forestryFaculty"),
              link: "external link",
            },
            {
              id: 3,
              title: t("header_nav_research_journals_naturalDisasters"),
              link: "external link",
            },
            {
              id: 4,
              title: t("header_nav_research_journals_theological"),
              link: "external link",
            },
            {
              id: 5,
              title: t("header_nav_research_journals_educationalResearch"),
              link: "external link",
            },
            {
              id: 6,
              title: t("header_nav_research_journals_biodiversity"),
              link: "external link",
            },
          ],
        },
        {
          id: 3,
          title: t("header_nav_research_centers"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_research_centers_contEducation"),
              link: "external link",
            },
            {
              id: 2,
              title: t("header_nav_research_centers_naturalHazards"),
              link: "external link",
            },
            {
              id: 3,
              title: t("header_nav_research_centers_caucasus"),
              link: "external link",
            },
            {
              id: 1,
              title: t("header_nav_research_centers_forestry"),
              link: "external link",
            },
            {
              id: 4,
              title: t("header_nav_research_centers_scienceTechno"),
              link: "external link",
            },
            {
              id: 5,
              title: t("header_nav_research_centers_psychologicalCounseling"),
              link: "external link",
            },
            {
              id: 6,
              title: t("header_nav_research_centers_distanceEducation"),
              link: "external link",
            },
            {
              id: 7,
              title: t("header_nav_research_centers_internationalRelations"),
              link: "external link",
            },
            {
              id: 8,
              title: t("header_nav_research_centers_projectCoordination"),
              link: "external link",
            },
            {
              id: 9,
              title: t("header_nav_research_centers_trTeaching"),
              link: "external link",
            },
            {
              id: 10,
              title: t("header_nav_research_centers_botanicalGarten"),
              link: "external link",
            },
            {
              id: 11,
              title: t("header_nav_research_centers_medicinalAromaticPlants"),
              link: "external link",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: t("header_nav_eacu"),
      subMenu: [
        {
          id: 1,
          title: t("header_nav_eacu_personnel"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_eacu_personnel_ebys"),
              link: "/ebys",
            },
            {
              id: 2,
              title: t("header_nav_eacu_personnel_academicInfo"),
              link: "/akademik-bilgi-sistemi",
            },
            {
              id: 3,
              title: t("header_nav_eacu_personnel_legislations"),
              link: "/mevzuat",
            },
            {
              id: 4,
              title: t("header_nav_eacu_personnel_eCampus"),
              link: "/ekampus",
            },
            {
              id: 5,
              title: t("header_nav_eacu_personnel_personnelAutomation"),
              link: "/personel-otomasyonu",
            },
            {
              id: 6,
              title: t("header_nav_eacu_personnel_srpAutomation"),
              link: "/bap-otomasyonu",
            },
          ],
        },
        {
          id: 2,
          title: t("header_nav_eacu_student"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_eacu_student_studentInfo"),
              link: "/ogrenci-bilgi-sistemi",
            },
            {
              id: 2,
              title: t("header_nav_eacu_student_alumniInfo"),
              link: "/mezun-bilgi-sistemi",
            },
            {
              id: 3,
              title: t("header_nav_eacu_student_distanceEducation"),
              link: "/uzaktan-egitim",
            },
          ],
        },
        {
          id: 3,
          title: t("header_nav_eacu_general"),
          subMenu: [
            {
              id: 1,
              title: t("header_nav_eacu_general_legislation"),
              link: "/mevzuat",
            },
            {
              id: 2,
              title: t("header_nav_eacu_general_eMail"),
              link: "/eposta-islemleri",
            },
            {
              id: 3,
              title: t("header_nav_eacu_general_acts"),
              link: "/akts-ttyc-katalogu",
            },
            {
              id: 4,
              title: t("header_nav_eacu_general_library"),
              link: "/kutuphane",
            },
            {
              id: 5,
              title: t("header_nav_eacu_general_information"),
              link: "/bilgi-edinme",
            },
            {
              id: 6,
              title: t("header_nav_eacu_general_sportCentreAppointment"),
              link: "/spor-tesisleri-randevu-sistemi",
            },
            {
              id: 7,
              title: t("header_nav_eacu_general_onlineLoadMoney"),
              link: "/online-para-yukleme",
            },
            {
              id: 8,
              title: t("header_nav_eacu_general_wifi"),
              link: "/kablosuz-internet",
            },
            {
              id: 9,
              title: t("header_nav_eacu_general_programAssessment"),
              link: "/uybs-program-degerlendirme-sistemi",
            },
          ],
        },
        {
          id: 4,
          title: t("header_nav_eacu_acuMobile"),
          subMenu: [
            {
              id: 1,
              title: "Andorid",
              link: "https://play.google.com/store/apps/details?id=com.artvin.acumobil",
            },
            {
              id: 2,
              title: "IOS",
              link: "https://apps.apple.com/tr/app/a%C3%A7%C3%BC-mobil/id1468084865?l=tr",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {menu.map((item) => {
        const { id, title, subMenu } = item;
        if (id === 4 || id === 5) {
          return (
            <li className="nav-item" key={id}>
              {title}
              <FaCaretDown className="nav-caret" />
              <ul className="dropdown1">
                {subMenu.map((subM) => {
                  const { id, title, subMenu } = subM;

                  if (subM.hasOwnProperty("subMenu")) {
                    return (
                      <li className="dropdownItem">
                        <a href="#" key={id} className="dropdown-link">
                          {title}
                        </a>
                        <FaCaretLeft className="nav-caret" />
                        <ul className="dropdown2">
                          {subMenu.map((subMenu2) => {
                            const { id, title, link, subMenu } = subMenu2;
                            if (subMenu2.hasOwnProperty("subMenu")) {
                              return (
                                <li className="dropdownItem2">
                                  <a
                                    href="#"
                                    key={id}
                                    className="dropdown-link2"
                                  >
                                    {title}
                                    <FaCaretRight className="nav-caret2" />
                                    <ul className="dropdown3">
                                      {subMenu.map((subMenu3) => {
                                        const { id, title, link } = subMenu3;
                                        return (
                                          <li
                                            key={id}
                                            className="dropdownItem3"
                                          >
                                            <a
                                              href="#"
                                              className="dropdown-link3"
                                            >
                                              {title}
                                            </a>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </a>
                                </li>
                              );
                            }
                            return (
                              <li className="dropdownItem2">
                                <a href="#" key={id} className="dropdown-link2">
                                  {title}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li className="dropdownItem">
                        <a href="#" key={id} className="dropdown-link">
                          {title}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </li>
          );
        }
        return (
          <li className="nav-item" key={id}>
            {title}
            <FaCaretDown className="nav-caret" />
            <ul className="dropdown1">
              {subMenu.map((subM) => {
                const { id, title, subMenu } = subM;

                if (subM.hasOwnProperty("subMenu")) {
                  return (
                    <li className="dropdownItem">
                      <a href="#" key={id} className="dropdown-link">
                        {title}
                      </a>
                      <FaCaretRight className="nav-caret" />
                      <ul className="dropdown2">
                        {subMenu.map((subMenu2) => {
                          const { id, title, link, subMenu } = subMenu2;
                          if (subMenu2.hasOwnProperty("subMenu")) {
                            return (
                              <li className="dropdownItem2">
                                <a href="#" key={id} className="dropdown-link2">
                                  {title}
                                  <FaCaretRight className="nav-caret2" />
                                  <ul className="dropdown3">
                                    {subMenu.map((subMenu3) => {
                                      const { id, title, link } = subMenu3;
                                      return (
                                        <li key={id} className="dropdownItem3">
                                          <a
                                            href="#"
                                            className="dropdown-link3"
                                          >
                                            {title}
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </a>
                              </li>
                            );
                          }
                          return (
                            <li className="dropdownItem2">
                              <a href="#" key={id} className="dropdown-link2">
                                {title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li className="dropdownItem">
                      <a href="#" key={id} className="dropdown-link">
                        {title}
                      </a>
                    </li>
                  );
                }
              })}
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default Home;
