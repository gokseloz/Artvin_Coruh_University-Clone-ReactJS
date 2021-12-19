import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExternalLink } from "react-external-link";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagram,
  FaGlobe,
  FaSearch,
} from "react-icons/fa";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ReactCountryFlag from "react-country-flag";
import i18next from "i18next";
import Logo from "../../assets/images/homepage/header/artvin-logo.png";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import HighlightedNews from "../../components/HighlightedNews/HighlightedNews";
import Annoucements from "../../components/Announcements/Annoucements";
import EventNews from "../../components/EventsNews/EventNews";
import Fastaccess from "../../components/FastAccess/FastAccess";
import Footer from "../../components/Footer/Footer";

const languages = [
  {
    id: "lang1",
    code: "en",
    name: "English",
    country_code: "US",
  },
  {
    id: "lang2",
    code: "tr",
    name: "Türkçe",
    country_code: "TR",
  },
];

const Home = () => {
  const { t } = useTranslation();
  const menu = [
    {
      title: t("header_nav_university"),
      subMenu: [
        {
          title: t("header_nav_university_generalInfo"),
          subMenu: [
            {
              title: t("header_nav_university_generalInfo_acuByNumbers"),
              link: "/sayilarla-acu",
            },
            {
              title: t("header_nav_university_generalInfo_aboutUni"),
              link: "/universitemiz-hakkinda",
            },
            {
              title: t("header_nav_university_generalInfo_history"),
              link: "/tarihce",
            },
            {
              title: t("header_nav_university_generalInfo_missionAndVision"),
              link: "/misyon-ve-vizyon",
            },
            {
              title: t("header_nav_university_generalInfo_institutionalStatue"),
              link: "/kurumsal-mevzuat",
            },
            {
              title: t("header_nav_university_generalInfo_newsletter"),
              link: "/universite-bulteni",
            },
            {
              title: t("header_nav_university_generalInfo_universityByPhotos"),
              link: "/fotograflarla-universitemiz",
            },
            {
              title: t("header_nav_university_generalInfo_introductoryVideo"),
              link: "/tanitim-videosu",
            },
            {
              title: t(
                "header_nav_university_generalInfo_introductoryBrochure"
              ),
              link: "/tanitim-brosurleri",
            },
          ],
        },
        {
          title: t("header_nav_university_administration"),
          subMenu: [
            {
              title: t("header_nav_university_administration_rector"),
              link: "/rektor",
            },
            {
              title: t("header_nav_university_administration_viceRectors"),
              link: "/rektor-yardimcilari",
            },
            {
              title: t(
                "header_nav_university_administration_administrativeBoard"
              ),
              link: "/yonetim-kurulu",
            },
            {
              title: t("header_nav_university_administration_senate"),
              link: "/senato",
            },
            {
              title: t("header_nav_university_administration_advisorsToRector"),
              link: "/rektor-danismanlari",
            },
            {
              title: t(
                "header_nav_university_administration_organizationChart"
              ),
              link: "/organizasyon-semasi",
            },
            {
              title: t("header_nav_university_administration_contact"),
              link: "/iletisim",
            },
          ],
        },
        {
          title: t("header_nav_university_administrativeUnits"),
          subMenu: [
            {
              title: t(
                "header_nav_university_administrativeUnits_generalSecretariat"
              ),
              link: "/genel-sekreterlik",
            },
            {
              title: t(
                "header_nav_university_administrativeUnits_directorates"
              ),
              subMenu: [
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_computing"
                  ),
                  link: "/bilgi-islem",
                },
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_financial"
                  ),
                  link: "/idari-mali",
                },
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_strategy"
                  ),
                  link: "/strateji-gelistirme",
                },
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_health"
                  ),
                  link: "/saglik-kultur-spor",
                },
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_construction"
                  ),
                  link: "/yapi-isleri",
                },
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_personnel"
                  ),
                  link: "/personel-daire",
                },
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_student"
                  ),
                  link: "/ogrenci-isleri",
                },
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_library"
                  ),
                  link: "/bilgi-islem",
                },
                {
                  title: t(
                    "header_nav_university_administrativeUnits_directorates_legalCounselor"
                  ),
                  link: "/hukuk-musavirligi",
                },
              ],
            },
            {
              title: t(
                "header_nav_university_administrativeUnits_internationalAffairs"
              ),
              link: "/dis-iliskiler-uam",
            },
            {
              title: t(
                "header_nav_university_administrativeUnits_internalAudit"
              ),
              link: "/ic-denetim",
            },
          ],
        },
        {
          title: t("header_nav_university_qualityEnsurance"),
          link: "kalite-guvence-sistemi",
        },
        {
          title: t("header_nav_university_visualIdentity"),
          link: "gorsel-kimlik",
        },
        {
          title: t("header_nav_university_institutionalIdentity"),
          link: "kurumsal-kimlik",
        },
        {
          title: t("header_nav_university_stakeholderSurvey"),
          link: "dis-paydas-anketi",
        },
        {
          title: t("header_nav_university_campus"),
          link: "yerleskeler",
        },
      ],
    },
    {
      title: t("header_nav_academics"),
      subMenu: [
        {
          title: t("header_nav_academics_faculties"),
          subMenu: [
            {
              title: t("header_nav_academics_faculties_education"),
              link: "/egitim-fakultesi",
            },
            {
              title: t("header_nav_academics_faculties_science"),
              link: "/fen-edebiyat-fakultesi",
            },
            {
              title: t("header_nav_academics_faculties_enginnering"),
              link: "/muhendislik-fakultesi",
            },
            {
              title: t("header_nav_academics_faculties_forestry"),
              link: "/orman-fakultesi",
            },
            {
              title: t("header_nav_academics_faculties_theology"),
              link: "/ilahiyat-fakultesi",
            },
            {
              title: t("header_nav_academics_faculties_economics"),
              link: "/hopa-iktisadi-ve-idari-bilimler-fakultesi",
            },
            {
              title: t("header_nav_academics_faculties_artandDesign"),
              link: "/sanat-ve-tasarim-fakultesi",
            },
            {
              title: t("header_nav_academics_faculties_health"),
              link: "/saglik-bilimleri-fakultesi",
            },
            {
              title: t("header_nav_academics_faculties_management"),
              link: "/isletme-fakultesi",
            },
          ],
        },
        {
          title: t("header_nav_academics_enstitutions"),
          subMenu: [
            {
              title: t("header_nav_academics_enstitutions_master"),
              link: "/lisansustu-egitim-enstitusu",
            },
          ],
        },
        {
          title: t("header_nav_academics_graduateSchools"),
          subMenu: [
            {
              title: t("header_nav_academics_graduateSchools_sports"),
              link: "/beden-egitimi-ve-spor-yuksek-okulu",
            },
            {
              title: t("header_nav_academics_graduateSchools_appliedSciences"),
              link: "/uygulamali-bilimler-yuksek-okulu",
            },
          ],
        },
        {
          title: t("header_nav_academics_vocationalSchools"),
          subMenu: [
            {
              title: t("header_nav_academics_vocationalSchools_artvin"),
              link: "/artvin-meslek-yuksek-okulu",
            },
            {
              title: t("header_nav_academics_vocationalSchools_arhavi"),
              link: "/arhavi-meslek-yuksek-okulu",
            },
            {
              title: t("header_nav_academics_vocationalSchools_borcka"),
              link: "/borcka-acarlar-meslek-yuksek-okulu",
            },
            {
              title: t("header_nav_academics_vocationalSchools_hopa"),
              link: "/hopa-meslek-yuksek-okulu",
            },
            {
              title: t("header_nav_academics_vocationalSchools_health"),
              link: "/saglik-hizmetleri-meslek-yuksek-okulu",
            },
            {
              title: t("header_nav_academics_vocationalSchools_savsat"),
              link: "/savsat-meslek-yuksek-okulu",
            },
            {
              title: t("header_nav_academics_vocationalSchools_yusufeli"),
              link: "/yusufeli-meslek-yuksek-okulu",
            },
          ],
        },
        {
          title: t("header_nav_academics_coordinators"),
          subMenu: [
            {
              title: t("header_nav_academics_coordinators_communication"),
              link: "/kurumsal-iletisim-koordinatorlugu",
            },
            {
              title: t("header_nav_academics_coordinators_ylysScholarship"),
              link: "/ylys-burs-programi-koordinatorlugu",
            },
            {
              title: t("header_nav_academics_coordinators_bap"),
              link: "/bap",
            },
            {
              title: t("header_nav_academics_coordinators_erasmus"),
              link: "/erasmus",
            },
            {
              title: t("header_nav_academics_coordinators_farabi"),
              link: "/farabi",
            },
            {
              title: t("header_nav_academics_coordinators_mevlana"),
              link: "/mevlana",
            },
            {
              title: t("header_nav_academics_coordinators_osym"),
              link: "/osym",
            },
            {
              title: t("header_nav_academics_coordinators_occupationalHealth"),
              link: "/is-sagligi-ve-guvenligi",
            },
            {
              title: t("header_nav_academics_coordinators_graduates"),
              link: "/mezunlar-koordinatorlugu",
            },
            {
              title: t("header_nav_academics_coordinators_aof"),
              link: "/aof",
            },
            {
              title: t(
                "header_nav_academics_coordinators_digitalTransformation"
              ),
              link: "/digital-donusum",
            },
            {
              title: t("header_nav_academics_coordinators_aromaticPlants"),
              link: "/kalite",
            },
            {
              title: t("header_nav_academics_rectorShipDepartments"),
              link: "/tibbi-aromatik-bitkiler-ihtisaslama-koordinatorlugu",
            },
          ],
        },
        {
          title: t("header_nav_academics_rectorShipDepartments"),
          link: "rektorluge-bagli-bolumler",
        },
      ],
    },
    {
      title: t("header_nav_student"),
      subMenu: [
        {
          title: t("header_nav_student_eTransactions"),
          subMenu: [
            {
              title: t("header_nav_student_eTransactions_studentInfo"),
              link: "/ogrenci-bilgi-sistemi",
            },
            {
              title: t("header_nav_student_eTransactions_studentId"),
              link: "/ogrenci-numarasi-sorgulama",
            },
            {
              title: t("header_nav_student_eTransactions_alumniInfo"),
              link: "/mezun-bilgi-sistemi",
            },
            {
              title: t("header_nav_student_eTransactions_courseMaterials"),
              link: "/ulusal-acik-ders-malzemeleri",
            },
          ],
        },
        {
          title: t("header_nav_student_presentation"),
          subMenu: [
            {
              title: t("header_nav_student_presentation_programs"),
              link: "/programlar-hakkinda-bilgi",
            },
            {
              title: t("header_nav_student_presentation_brochure"),
              link: "/universite-tanitim-brosurleri",
            },
            {
              title: t("header_nav_student_presentation_prospectiveStudents"),
              link: "/aday-ogrenciler",
            },
            {
              title: t("header_nav_student_presentation_universityByPhotos"),
              link: "/fotograflarla-universitemiz",
            },
          ],
        },
        {
          title: t("header_nav_student_general"),
          subMenu: [
            {
              title: t("header_nav_student_general_regulations"),
              link: "/yonetmelikler",
            },
            {
              title: t("header_nav_student_general_academicCalendar"),
              link: "/akademik-takvim",
            },
            {
              title: t("header_nav_student_general_studentCouncil"),
              link: "/ogrenci-konsey-baskanligi",
            },
            {
              title: t("header_nav_student_general_studentNumbers"),
              link: "/ogrenci-sayilari",
            },
          ],
        },
        {
          title: t("header_nav_student_disabledStudent"),
          link: "/engelli-ogrenci-birimi",
        },
        {
          title: t("header_nav_student_general_jobsCareer"),
          link: "/kariyer-merkezi",
        },
      ],
    },
    {
      title: t("header_nav_research"),
      subMenu: [
        {
          title: t("header_nav_research_research"),
          subMenu: [
            {
              title: t("header_nav_research_research_library"),
              link: "/kutuphane",
            },
            {
              title: t("header_nav_research_research_herbarium"),
              link: "/herbaryum-arth",
            },
            {
              title: t("header_nav_research_research_srp"),
              link: "/bap",
            },
            {
              title: t("header_nav_research_research_laboratoryInfra"),
              link: "/laboratuvar-altyapisi",
            },
            {
              title: t("header_nav_research_research_researcherDatabase"),
              link: "/arastirmaci-veritabani",
            },
            {
              title: t("header_nav_research_research_ethicsCommittee"),
              link: "/etik-kurul",
            },
          ],
        },
        {
          title: t("header_nav_research_journals"),
          subMenu: [
            {
              title: t("header_nav_research_journals_socialSciences"),
              link: "external link",
            },
            {
              title: t("header_nav_research_journals_forestryFaculty"),
              link: "external link",
            },
            {
              title: t("header_nav_research_journals_naturalDisasters"),
              link: "external link",
            },
            {
              title: t("header_nav_research_journals_theological"),
              link: "external link",
            },
            {
              title: t("header_nav_research_journals_educationalResearch"),
              link: "external link",
            },
            {
              title: t("header_nav_research_journals_biodiversity"),
              link: "external link",
            },
          ],
        },
        {
          title: t("header_nav_research_centers"),
          subMenu: [
            {
              title: t("header_nav_research_centers_contEducation"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_naturalHazards"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_caucasus"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_forestry"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_scienceTechno"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_psychologicalCounseling"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_distanceEducation"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_internationalRelations"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_projectCoordination"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_trTeaching"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_botanicalGarten"),
              link: "external link",
            },
            {
              title: t("header_nav_research_centers_medicinalAromaticPlants"),
              link: "external link",
            },
          ],
        },
      ],
    },
    {
      title: t("header_nav_eacu"),
      subMenu: [
        {
          title: t("header_nav_eacu_personnel"),
          subMenu: [
            {
              title: t("header_nav_eacu_personnel_ebys"),
              link: "/ebys",
            },
            {
              title: t("header_nav_eacu_personnel_academicInfo"),
              link: "/akademik-bilgi-sistemi",
            },
            {
              title: t("header_nav_eacu_personnel_legislations"),
              link: "/mevzuat",
            },
            {
              title: t("header_nav_eacu_personnel_eCampus"),
              link: "/ekampus",
            },
            {
              title: t("header_nav_eacu_personnel_personnelAutomation"),
              link: "/personel-otomasyonu",
            },
            {
              title: t("header_nav_eacu_personnel_srpAutomation"),
              link: "/bap-otomasyonu",
            },
          ],
        },
        {
          title: t("header_nav_eacu_student"),
          subMenu: [
            {
              title: t("header_nav_eacu_student_studentInfo"),
              link: "/ogrenci-bilgi-sistemi",
            },
            {
              title: t("header_nav_eacu_student_alumniInfo"),
              link: "/mezun-bilgi-sistemi",
            },
            {
              title: t("header_nav_eacu_student_distanceEducation"),
              link: "/uzaktan-egitim",
            },
          ],
        },
        {
          title: t("header_nav_eacu_general"),
          subMenu: [
            {
              title: t("header_nav_eacu_general_legislation"),
              link: "/mevzuat",
            },
            {
              title: t("header_nav_eacu_general_eMail"),
              link: "/eposta-islemleri",
            },
            {
              title: t("header_nav_eacu_general_acts"),
              link: "/akts-ttyc-katalogu",
            },
            {
              title: t("header_nav_eacu_general_library"),
              link: "/kutuphane",
            },
            {
              title: t("header_nav_eacu_general_information"),
              link: "/bilgi-edinme",
            },
            {
              title: t("header_nav_eacu_general_sportCentreAppointment"),
              link: "/spor-tesisleri-randevu-sistemi",
            },
            {
              title: t("header_nav_eacu_general_onlineLoadMoney"),
              link: "/online-para-yukleme",
            },
            {
              title: t("header_nav_eacu_general_wifi"),
              link: "/kablosuz-internet",
            },
            {
              title: t("header_nav_eacu_general_programAssessment"),
              link: "/uybs-program-degerlendirme-sistemi",
            },
          ],
        },
        {
          title: t("header_nav_eacu_acuMobile"),
          subMenu: [
            {
              title: "Andorid",
              link: "https://play.google.com/store/apps/details?id=com.artvin.acumobil",
            },
            {
              title: "IOS",
              link: "https://apps.apple.com/tr/app/a%C3%A7%C3%BC-mobil/id1468084865?l=tr",
            },
          ],
        },
      ],
    },
  ];

  //================================
  // Adding unique id to menu objects
  //================================
  let i = 0;
  let menuLn = menu.length;
  for (i; i < menuLn; i++) {
    menu[i].id = `${i + 1}`;

    let subMenuLn = menu[i].subMenu.length;
    let si = 0;
    for (si; si < subMenuLn; si++) {
      menu[i].subMenu[si].id = `${i + 1}.${si + 1}`;

      if (menu[i].subMenu[si].subMenu) {
        let subMenu2Ln = menu[i].subMenu[si].subMenu.length;
        let s2i = 0;

        for (s2i; s2i < subMenu2Ln; s2i++) {
          menu[i].subMenu[si].subMenu[s2i].id = `${i + 1}.${si + 1}.${s2i + 1}`;

          if (menu[i].subMenu[si].subMenu[s2i].subMenu) {
            let subMenu3Ln = menu[i].subMenu[si].subMenu[s2i].subMenu.length;
            let s3i = 0;

            for (s3i; s3i < subMenu3Ln; s3i++) {
              menu[i].subMenu[si].subMenu[s2i].subMenu[s3i].id = `${i + 1}.${
                si + 1
              }.${s2i + 1}.${s3i + 1}`;
            }
          }
        }
      }
    }
  }
  //=======================================
  // End - Adding unique id to menu objects
  //=======================================

  function changeLanguage(code) {
    i18next.changeLanguage(code);
  }
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
                      onClick={() => changeLanguage(code)}
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
          <Navbar menu={menu}></Navbar>
        </div>
      </header>
      <main>
        <Slider />
        <HighlightedNews />
        <div className="newsAndQuickLinks">
          <div className="newsAndQuickLinks-container">
            <Annoucements />
            <EventNews />
            <Fastaccess />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
