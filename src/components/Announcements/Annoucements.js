import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Announcements.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Cookies from "universal-cookie";
import { useRef } from "react";
const cookies = new Cookies();

const Annoucements = () => {
  const { t } = useTranslation();
  const tabs = [
    {
      id: "announcementsTabs1",
      title: t("home_announcements_current"),
      ariaLabel: "current announcements",
      announcements: [
        {
          id: "announcementCurrent1",
          date: cookies.get("i18next") === "tr" ? "15 Eyl" : "15 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "Artvin Çoruh Üniversitesi 15/09/2021 Tarihli Senato Toplantısı Kararı"
              : "Artvin Coruh University Senate Meeting Decision Dated 15/09/2021",
        },
        {
          id: "announcementCurrent2",
          date: cookies.get("i18next") === "tr" ? "15 Eyl" : "15 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "2021 Sağlık Lisans Tamamlama ile Üniversitemize Yerleşen Öğrencilerin Kayıt İşlemleri"
              : "Registration Procedures for Students who have Placed in our University with 2021 Health Bachelor Completion",
        },
        {
          id: "announcementCurrent3",
          date: cookies.get("i18next") === "tr" ? "14 Eyl" : "14 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "2021 DGS ile Üniversitemize Yerleşen Öğrencilerin Kayıt İşlemleri"
              : "Registration Procedures for Students Who Have Been Placed in our University with 2021 DGS",
        },
        {
          id: "announcementCurrent4",
          date: cookies.get("i18next") === "tr" ? "13 Eyl" : "13 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "ARDEB 1001 Programı Kapsamında “Spor Araştırmaları” Başlıklı Özel Çağrı Açılıyor"
              : "A Special Call titled “Sports Research” is Opening within the Scope of ARDEB 1001 Program",
        },
        {
          id: "announcementCurrent5",
          date: cookies.get("i18next") === "tr" ? "10 Eyl" : "10 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "Paydaş Görüş Formu"
              : "Stakeholder Opinion Form",
        },
        {
          id: "announcementCurrent6",
          date: cookies.get("i18next") === "tr" ? "10 Eyl" : "10 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "2021 Yılı Üniversitemize Kayıt Hakkı Kazanan Uluslararası (Yabancı Uyruklu) Öğrencilerin Yerleşme Sonuçları ve Kayıt İşlemleri"
              : "List of Foreign Students Admitted to Our University For Registration in 2021",
        },
        {
          id: "announcementCurrent7",
          date: cookies.get("i18next") === "tr" ? "8 Eyl" : "8 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "TÜSEB Aziz Sancar Bilim, Hizmet ve Teşvik Ödülleri"
              : "TÜSEB Aziz Sancar Science, Service and Encouragement Awards",
        },
        {
          id: "announcementCurrent8",
          date: cookies.get("i18next") === "tr" ? "6 Eyl" : "6 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "Yüksek Öğrenim Kredi ve Yurtlar Kurumu (KYK) Yurt Başvuruları Başlamıştır"
              : "Higher Education Credit and Hostels Institution (KYK) Dormitory Applications Have Started",
        },
      ],
    },
    {
      id: "announcementsTabs2",
      title: t("home_announcements_administ"),
      ariaLabel: "administrative announcements",
      announcements: [
        {
          id: "announcementadminist1",
          date: cookies.get("i18next") === "tr" ? "10 Eki" : "10 Oct",
          announcement:
            cookies.get("i18next") === "tr" ? "Başsağlığı" : "Condolences ",
        },
        {
          id: "announcementadminist2",
          date: cookies.get("i18next") === "tr" ? "22 Şub" : "22 Feb",
          announcement:
            cookies.get("i18next") === "tr"
              ? "Öğretim Elemanı İlanı"
              : "Instructor Recruitment",
        },
        {
          id: "announcementadminist3",
          date: cookies.get("i18next") === "tr" ? "30 Mar" : "30 Mar",
          announcement:
            cookies.get("i18next") === "tr"
              ? "Kurs Başvurularımız Başlamıştır"
              : "Our Course Applications Have Started",
        },
      ],
    },
    {
      id: "announcementsTabs3",
      title: t("home_announcements_student"),
      ariaLabel: "student announcements",
      announcements: [
        {
          id: "announcementStudent1",
          date: cookies.get("i18next") === "tr" ? "20 Eki" : "20 Oct",
          announcement:
            cookies.get("i18next") === "tr"
              ? "Kariyer Merkezi Sosyal Medya Hesapları"
              : "Career Center Social Media Accounts",
        },
        {
          id: "announcementStudent2",
          date: cookies.get("i18next") === "tr" ? "18 Şub" : "18 Feb",
          announcement:
            cookies.get("i18next") === "tr"
              ? "2020 Güz Yarıyılı Uzaktan Eğitim Anketi"
              : "2020 Fall Semester Distance Education Survey",
        },
        {
          id: "announcementStudent3",
          date: cookies.get("i18next") === "tr" ? "20 Mar" : "20 Mar",
          announcement:
            cookies.get("i18next") === "tr"
              ? "Artvin Çoruh Üniversitesi e-Devlet Kapısında"
              : "Artvin Coruh University is at the e-Government Gate",
        },
      ],
    },
  ];

  const [value, setValue] = useState(0);
  const [click, setClick] = useState(0);
  const ancListRef = useRef();

  const { announcements } = tabs[value];

  const nextAnc = () => {
    const topValue = `${click * -58}px`;
    ancListRef.current.style.top = topValue;
  };
  const prevAnc = () => {
    const topValue = `${click * 58}px`;
    ancListRef.current.style.top = topValue;
  };

  const incClick = () => {
    if (click > announcements.length - 1) setClick(0);
    else {
      nextAnc();
    }
  };

  const decClick = () => {
    if (click < 0) setClick(0);
    else {
      prevAnc();
    }
  };

  useEffect(() => {
    decClick();
    incClick();
  }, [click]);

  const isShowBtns = tabs[value].announcements.length > 5;
  const renderedBtns = isShowBtns && (
    <div className="announcement-btn-container">
      <button
        className="announcement-btn announcement-next-btn"
        onClick={() => setClick(click + 1)}
      >
        <FaChevronDown />
        {t("home_announcements_nextBtn")}
      </button>
      <button
        className="announcement-btn announcement-prev-btn"
        onClick={() => setClick(click - 1)}
      >
        <FaChevronUp />
        {t("home_announcements_prevBtn")}
      </button>
    </div>
  );

  const ancList = announcements.map((anc) => (
    <li key={anc.id} className="announcement-item" tabIndex="0">
      <div className="announcement-date">
        <span>{anc.date.split(" ")[0]}</span>
        <span>{anc.date.split(" ")[1]}</span>
      </div>
      <div className="announcement-text">{anc.announcement}</div>
    </li>
  ));

  return (
    <section className="announcements">
      <div className="announcements-container">
        <div className="announcements-heading">
          <h3 className="announcements-header" tabIndex="0">
            {t("home_announcements")}
          </h3>
          <div className="announcements-tabs">
            {tabs.map((tab, index) => {
              return (
                <button
                  key={tab.id}
                  className={`announcements-tab ${
                    index === value && "active-btn"
                  }`}
                  onClick={() => {
                    setValue(index);
                    setClick(0);
                  }}
                  aria-label={tab.ariaLabel}
                  aria-click
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="announcement-list-container">
          <ul className="announcement-list" ref={ancListRef}>
            {ancList}
          </ul>
        </div>
        {renderedBtns}
      </div>
    </section>
  );
};

export default Annoucements;
