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
          title: "Fakülteler",
          subMenu: [
            {
              id: 1,
              title: "Egitim Fakultesi",
              link: "/egitim-fakultesi",
            },
            {
              id: 2,
              title: "Fen Edebiyat Fakultesi",
              link: "/fen-edebiyat-fakultesi",
            },
            {
              id: 3,
              title: "Mühendislik Fakultesi",
              link: "/muhendislik-fakultesi",
            },
            {
              id: 4,
              title: "Orman Fakultesi",
              link: "/orman-fakultesi",
            },
            {
              id: 5,
              title: "Ilahiyat Fakultesi",
              link: "/ilahiyat-fakultesi",
            },
            {
              id: 6,
              title: "Hopa Iktisadi ve Idari Bilimler Fakultesi",
              link: "/hopa-iktisadi-ve-idari-bilimler-fakultesi",
            },
            {
              id: 7,
              title: "Sanat ve Tasarim Fakultesi",
              link: "/sanat-ve-tasarim-fakultesi",
            },
            {
              id: 8,
              title: "Saglik Bilimleri Fakultesi",
              link: "/saglik-bilimleri-fakultesi",
            },
            {
              id: 9,
              title: "Isletme Fakultesi",
              link: "/isletme-fakultesi",
            },
          ],
        },
        {
          id: 2,
          title: "Enstituler",
          subMenu: [
            {
              id: 1,
              title: "Lisansustu Egitim Enstitusu",
              link: "/lisansustu-egitim-enstitusu",
            },
          ],
        },
        {
          id: 3,
          title: "Yuksek Okullar",
          subMenu: [
            {
              id: 1,
              title: "Beden Egitimi ve Spor Yuksekokulu",
              link: "/beden-egitimi-ve-spor-yuksek-okulu",
            },
            {
              id: 2,
              title: "Uygulamali Bilimler Yuksekokulu",
              link: "/uygulamali-bilimler-yuksek-okulu",
            },
          ],
        },
        {
          id: 4,
          title: "Meslek Yuksek Okullari",
          subMenu: [
            {
              id: 1,
              title: "Artvin Meslek Yuksekokulu",
              link: "/artvin-meslek-yuksek-okulu",
            },
            {
              id: 2,
              title: "Arhavi Meslek Yuksekokulu",
              link: "/arhavi-meslek-yuksek-okulu",
            },
            {
              id: 3,
              title: "Borcka Acarlar Meslek Yuksekokulu",
              link: "/borcka-acarlar-meslek-yuksek-okulu",
            },
            {
              id: 4,
              title: "Hopa Meslek Yuksekokulu",
              link: "/hopa-meslek-yuksek-okulu",
            },
            {
              id: 5,
              title: "Saglik Hizmetleri Meslek Yuksekokulu",
              link: "/saglik-hizmetleri-meslek-yuksek-okulu",
            },
            {
              id: 6,
              title: "Savsat Meslek Yuksekokulu",
              link: "/savsat-meslek-yuksek-okulu",
            },
            {
              id: 7,
              title: "Yusufeli Meslek Yuksekokulu",
              link: "/yusufeli-meslek-yuksek-okulu",
            },
          ],
        },
        {
          id: 5,
          title: "Koordinatorlukler",
          subMenu: [
            {
              id: 1,
              title: "Kurumsal Iletisim Koordinatorlugu",
              link: "/kurumsal-iletisim-koordinatorlugu",
            },
            {
              id: 2,
              title: "YLYS Burs Programi Koordinatorlugu",
              link: "/ylys-burs-programi-koordinatorlugu",
            },
            {
              id: 3,
              title: "BAP",
              link: "/bap",
            },
            {
              id: 4,
              title: "Erasmus",
              link: "/erasmus",
            },
            {
              id: 5,
              title: "Farabi",
              link: "/farabi",
            },
            {
              id: 6,
              title: "Mevlana",
              link: "/mevlana",
            },
            {
              id: 7,
              title: "OSYM",
              link: "/osym",
            },
            {
              id: 8,
              title: "Is Sagligi ve Guvenligi",
              link: "/is-sagligi-ve-guvenligi",
            },
            {
              id: 9,
              title: "Mezunlar Koordinatorlugu",
              link: "/mezunlar-koordinatorlugu",
            },
            {
              id: 10,
              title: "AOF",
              link: "/aof",
            },
            {
              id: 11,
              title: "Dijital Donusum",
              link: "/digital-donusum",
            },
            {
              id: 12,
              title: "Kalite",
              link: "/kalite",
            },
            {
              id: 13,
              title: "Tibbi Aromatik Bitkiler Ihtisaslasma Koordinatorlugu",
              link: "/tibbi-aromatik-bitkiler-ihtisaslama-koordinatorlugu",
            },
          ],
        },
        {
          id: 6,
          title: "Rektorluge Bagli Bolumler",
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
          title: "E-islemler",
          subMenu: [
            {
              id: 1,
              title: "Ogrenci Bilgi Sistemi",
              link: "/ogrenci-bilgi-sistemi",
            },
            {
              id: 2,
              title: "Ogrenci Numarasi Sorgulama",
              link: "/ogrenci-numarasi-sorgulama",
            },
            {
              id: 3,
              title: "Mezun Bilgi Sistemi",
              link: "/mezun-bilgi-sistemi",
            },
            {
              id: 4,
              title: "Ulusal Acik Ders Malzemeleri",
              link: "/ulusal-acik-ders-malzemeleri",
            },
          ],
        },
        {
          id: 2,
          title: "Tanitim",
          subMenu: [
            {
              id: 1,
              title: "Programlar Hakkinda Bilgi",
              link: "/programlar-hakkinda-bilgi",
            },
            {
              id: 2,
              title: "Universite Tanitim Brosurleri",
              link: "/universite-tanitim-brosurleri",
            },
            {
              id: 3,
              title: "Aday Ogrenciler",
              link: "/aday-ogrenciler",
            },
            {
              id: 4,
              title: "Fotograflarla Universitemiz",
              link: "/fotograflarla-universitemiz",
            },
          ],
        },
        {
          id: 3,
          title: "Genel",
          subMenu: [
            {
              id: 1,
              title: "Yönetmelikler",
              link: "/yonetmelikler",
            },
            {
              id: 2,
              title: "Akademik Takvim",
              link: "/akademik-takvim",
            },
            {
              id: 3,
              title: "Ögrenci Konsey Baskanligi",
              link: "/ogrenci-konsey-baskanligi",
            },
            {
              id: 4,
              title: "Ögrenci Sayilari",
              link: "/ogrenci-sayilari",
            },
          ],
        },
        {
          id: 4,
          title: "Engelli Ogrenci Birimi",
          link: "/engelli-ogrenci-birimi",
        },
        {
          id: 5,
          title: "Kariyer Merkezi",
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
          title: "Arastirma",
          subMenu: [
            {
              id: 1,
              title: "Kütüphane",
              link: "/kutuphane",
            },
            {
              id: 2,
              title: "Herbaryum ARTH",
              link: "/herbaryum-arth",
            },
            {
              id: 3,
              title: "BAP",
              link: "/bap",
            },
            {
              id: 4,
              title: "Laboratuvar Altyapisi",
              link: "/laboratuvar-altyapisi",
            },
            {
              id: 5,
              title: "Arastirmaci Veritabani",
              link: "/arastirmaci-veritabani",
            },
            {
              id: 6,
              title: "Etik Kurul",
              link: "/etik-kurul",
            },
          ],
        },
        {
          id: 2,
          title: "Bilimsel Dergiler",
          subMenu: [
            {
              id: 1,
              title: "Uluslararasi Sosyal Bilimler Dergisi",
              link: "external link",
            },
            {
              id: 2,
              title: "Orman Fakultesi Dergisi",
              link: "external link",
            },
            {
              id: 3,
              title: "Dogal Afetler ve Cevre Dergisi",
              link: "external link",
            },
            {
              id: 4,
              title: "Studies in Educational Research and Development",
              link: "external link",
            },
            {
              id: 5,
              title: "Turkish Journal of Biodiversity",
              link: "external link",
            },
          ],
        },
        {
          id: 3,
          title: "Arastirma Merkezleri",
          subMenu: [
            {
              id: 1,
              title: "Endustriyel Tasarimlar Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 2,
              title: "Surekli Egitim Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 3,
              title: "Dogal Afetler Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 1,
              title: "Kafkasya ve Cevresi Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 4,
              title: "Ormancilik Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 5,
              title: "Bilim Teknoloji Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 6,
              title: "Psikolojik Danisma ve Rehberlik Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 7,
              title: "Uzaktan Egitim Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 8,
              title: "Dis Iliskiler Uygulama ve Aras. Merk.",
              link: "external link",
            },
            {
              id: 9,
              title: "Proje Koordinasyon Uygulama ve Aras. Merk.",
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
          title: "Personel",
          subMenu: [
            {
              id: 1,
              title: "EBYS",
              link: "/ebys",
            },
            {
              id: 2,
              title: "Akademik Bilgi Sistemi",
              link: "/akademik-bilgi-sistemi",
            },
            {
              id: 3,
              title: "Mevzuat",
              link: "/mevzuat",
            },
            {
              id: 4,
              title: "E-kampus",
              link: "/ekampus",
            },
            {
              id: 5,
              title: "Personel Otomasyonu",
              link: "/personel-otomasyonu",
            },
            {
              id: 6,
              title: "BAP Otomasyonu",
              link: "/bap-otomasyonu",
            },
          ],
        },
        {
          id: 2,
          title: "Ogrenci",
          subMenu: [
            {
              id: 1,
              title: "Ogrenci Bilgi Sistemi",
              link: "/ogrenci-bilgi-sistemi",
            },
            {
              id: 2,
              title: "Mezun Bilgi Sistemi",
              link: "/mezun-bilgi-sistemi",
            },
            {
              id: 3,
              title: "Uzantan Egitim",
              link: "/uzaktan-egitim",
            },
          ],
        },
        {
          id: 3,
          title: "Genel",
          subMenu: [
            {
              id: 1,
              title: "Mevzuat",
              link: "/mevzuat",
            },
            {
              id: 2,
              title: "E-posta Islemleri",
              link: "/eposta-islemleri",
            },
            {
              id: 3,
              title: "AKTS ve TYYC Katalogu",
              link: "/akts-ttyc-katalogu",
            },
            {
              id: 4,
              title: "Kutuphane",
              link: "/kutuphane",
            },
            {
              id: 5,
              title: "Bilgi Edinme",
              link: "/bilgi-edinme",
            },
            {
              id: 6,
              title: "Spor Tesisleri Randevu Sistemi",
              link: "/spor-tesisleri-randevu-sistemi",
            },
            {
              id: 7,
              title: "Online Para Yukleme",
              link: "/online-para-yukleme",
            },
            {
              id: 8,
              title: "Kablosuz Internet",
              link: "/kablosuz-internet",
            },
            {
              id: 9,
              title: "UYBS Program Degerlendirme Sistemi",
              link: "/uybs-program-degerlendirme-sistemi",
            },
          ],
        },
        {
          id: 4,
          title: "Acu Mobil",
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
  const [open, setOpen] = useState(false);
  return (
    <>
      {menu.map((item) => {
        const { id, title, subMenu } = item;
        return (
          <li className="nav-item" key={id} onMouseOver={() => setOpen(true)}>
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
