import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./EventNews.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const EventNews = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const tabs = [
    {
      id: "EventsNewsTab1",
      title: t("home_activitiesNews_activity"),
      events: [
        {
          id: "EventsNewsActivity1",
          date: cookies.get("i18next") === "tr" ? "6 Nis" : "6 Apr",
          event:
            cookies.get("i18next") === "tr"
              ? "Türkiyede Eğitim YÖK Sanal Fuari 2020"
              : "Study in Turkey YÖK Virtual Fair 2020",
        },
        {
          id: "EventsNewsActivity2",
          date: cookies.get("i18next") === "tr" ? "26 Nis" : "26 Apr",
          event:
            cookies.get("i18next") === "tr"
              ? "Erasmus+ Öğrenci Öğrenim ve Staj Hareketliliği Bilgilendirme Toplantısı."
              : "Erasmus+ Student Learning and Internship Mobility Information Meeting",
        },
      ],
    },
  ];

  const { events } = tabs[value];

  return (
    <section className="events">
      <div className="events-container">
        <div className="events-heading">
          <h3 className="events-header">{t("home_activitiesNews")}</h3>
          <div className="events-tabs">
            {tabs.map((tab, index) => {
              return (
                <button
                  key={tab.id}
                  className={`event-tab ${index === value && "active-btn"}`}
                  onClick={() => {
                    setValue(index);
                  }}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>
        {events.map((ev) => (
          <div key={ev.id} className="event-container">
            <div className="event-date">
              <span>{ev.date?.split(" ")[0]}</span>
              <span>{ev.date?.split(" ")[1]}</span>
            </div>
            <div className="event-text">{ev.event}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventNews;
