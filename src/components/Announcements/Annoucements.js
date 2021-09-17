import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Announcements.css";
import NewsTicker from "react-advanced-news-ticker";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Annoucements = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const tabs = [
    {
      id: "announcementsTabs1",
      title: t("home_announcements_current"),
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
              : "Registration Procedures for Students who have settled in our University with 2021 Health Bachelor Completion",
        },
        {
          id: "announcementCurrent3",
          date: cookies.get("i18next") === "tr" ? "14 Eyl" : "14 Sept",
          announcement:
            cookies.get("i18next") === "tr"
              ? "2021 DGS ile Üniversitemize Yerleşen Öğrencilerin Kayıt İşlemleri"
              : "Registration Procedures for Students who have settled in our University with 2021 Health Bachelor Completion",
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
              ? "2021 Yılı Üniversitemize Kayıt Hakkı Kazanan Uluslararası (Yabancı Uyruklu) Öğrencilerin Yerleşme Sonuçları ve Kayıt İşlemleri / 2021-List of Foreign Students Admitted to Our University For Registration"
              : "Placement Results and Registration Procedures of International (Foreign National) Students Who Have Been Enrolled in our University in 2021 / 2021-List of Foreign Students Admitted to Our University For Registration",
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
      announcements: [],
    },
    {
      id: "announcementsTabs3",
      title: t("home_announcements_student"),
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

  const { id, title, announcements } = tabs[value];

  return (
    <section className="announcements">
      <div className="announcements-container">
        <div className="announcements-heading">
          <h3 className="announcements-header">Duyurular</h3>
          <div className="announcements-tabs">
            {tabs.map((tab) => {
              return (
                <button key={tab.id} className="announcements-tab">
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
        <NewsTicker
          maxRows={6}
          speed={600}
          duration={4000}
          autoStart={false}
          pauseOnHover={false}
        >
          {announcements.map((anc) => (
            <div
              key={anc.id}
              className="announcement-container"
              style={{ display: "flex" }}
            >
              <div className="announcement-date">{anc.date}</div>
              <div className="announcement-text">{anc.announcement}</div>
            </div>
          ))}
        </NewsTicker>
      </div>
    </section>
  );
};

export default Annoucements;
