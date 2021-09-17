import React from "react";
import { useTranslation } from "react-i18next";
import "./HighlightedNews.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import highlightedNews1 from "../../images/homeHighlightednews/highlightednews1.jpg";
import highlightedNews2 from "../../images/homeHighlightednews/highlightednews2.jpg";
import highlightedNews3 from "../../images/homeHighlightednews/highlightednews3.jpg";
import highlightedNews4 from "../../images/homeHighlightednews/highlightednews4.jpg";
import highlightedNews5 from "../../images/homeHighlightednews/highlightednews5.jpg";
import highlightedNews6 from "../../images/homeHighlightednews/highlightednews6.jpg";

const HighlightedNews = () => {
  const { t } = useTranslation();
  const highlightedNews = [
    {
      id: "highlightedNews1",
      img: highlightedNews1,
      alt: t("home_highlightednews1_ahiCommunity"),
      date: t("home_highlightednews1_date"),
      desc: t("home_highlightednews1_description"),
    },
    {
      id: "highlightedNews2",
      img: highlightedNews2,
      alt: t("home_highlightednews2_orangeFlag"),
      date: t("home_highlightednews2_date"),
      desc: t("home_highlightednews2_description"),
    },
    {
      id: "highlightedNews3",
      img: highlightedNews3,
      alt: t("home_highlightednews3_senateMeeting"),
      date: t("home_highlightednews3_date"),
      desc: t("home_highlightednews3_description"),
    },
    {
      id: "highlightedNews4",
      img: highlightedNews4,
      alt: t("home_highlightednews4_kazakstanAgroUniAggrement"),
      date: t("home_highlightednews4_date"),
      desc: t("home_highlightednews4_description"),
    },
    {
      id: "highlightedNews5",
      img: highlightedNews5,
      alt: t("home_highlightednews5_artvinMemberofParliamentVisit"),
      date: t("home_highlightednews5_date"),
      desc: t("home_highlightednews5_description"),
    },
    {
      id: "highlightedNews6",
      img: highlightedNews6,
      alt: t("home_highlightednews6_artvinMemberofParliamentVisit"),
      date: t("home_highlightednews6_date"),
      desc: t("home_highlightednews6_description"),
    },
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <div className="highlightedNews">
      <div className="highlightedNews-container">
        <AliceCarousel
          disableDotsControls={true}
          disableButtonsControls={true}
          mouseTracking
          items={highlightedNews.map((news) => {
            const { id, img, alt, date, desc } = news;
            return (
              <article
                key={id}
                className="swipeItem-container"
                style={{ userSelect: "none" }}
              >
                <div className="swipeItem-link">
                  <figure className="swipeItem-top">
                    <img src={img} alt={alt} />
                    <caption className="swipeItemCaption">
                      <time>{date}</time>
                    </caption>
                  </figure>
                  <div className="swipeItem-desc">
                    <a href="/">{desc}</a>
                  </div>
                </div>
              </article>
            );
          })}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default HighlightedNews;
