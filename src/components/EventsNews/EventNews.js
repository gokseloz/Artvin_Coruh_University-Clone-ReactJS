import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp, FaVideo } from "react-icons/fa";
import introduction from "../../images/homepage/activities/introduction.jpg";
import "./EventNews.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const EventNews = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const [click, setClick] = useState(0);
  const eventListRef = useRef();

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
        {
          id: "EventsNewsActivity3",
          date: cookies.get("i18next") === "tr" ? "6 Haz" : "6 Jun",
          event:
            cookies.get("i18next") === "tr"
              ? "Web of Science Online Eğitimleri"
              : "Web of Science Online Courses",
        },
        {
          id: "EventsNewsActivity4",
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

  const nextAnc = () => {
    const topValue = `${click * -60}px`;
    eventListRef.current.style.top = topValue;
  };
  const prevAnc = () => {
    const topValue = `${click * 60}px`;
    eventListRef.current.style.top = topValue;
  };

  const incClick = () => {
    if (click > events.length - 1) setClick(0);
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

  const isShowBtns = tabs[value].events.length > 3;

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

  const eventList = events.map((ev) => (
    <li key={ev.id} className="event-container">
      <div className="event-date">
        <span>{ev.date?.split(" ")[0]}</span>
        <span>{ev.date?.split(" ")[1]}</span>
      </div>
      <div className="event-text">{ev.event}</div>
    </li>
  ));

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
        <div className="event-list-container">
          <ul className="event-list" ref={eventListRef}>
            {eventList}
          </ul>
        </div>

        {renderedBtns}
      </div>
      <div className="intro-video">
        <figure className="intro-img-container">
          <img src={introduction} alt="introduction" className="intro-img" />
          <figcaption className="intro-caption">
            {t("home_activitiesNews_introductionVideo")}
          </figcaption>
          <FaVideo className="intro-video-icon" />
          <figcaption className="intro-caption-active">
            {t("home_activitiesNews_introductionVideo")}
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default EventNews;
