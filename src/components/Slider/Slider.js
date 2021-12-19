import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../assets/images/homepage/slides/slide1.jpg";
import slide2 from "../../assets/images/homepage/slides/slide2.jpg";
import slide3 from "../../assets/images/homepage/slides/slide3.jpg";
import slide4 from "../../assets/images/homepage/slides/slide4.jpg";
import slide5 from "../../assets/images/homepage/slides/slide5.jpg";
import "./Slider.css";

const Slider = () => {
  const { t } = useTranslation();
  const slides = [
    {
      id: "homeSlider1",
      src: slide1,
      alt: t("home_slider_savsat"),
    },
    {
      id: "homeSlider2",
      src: slide2,
      alt: t("home_slider_borcka_darkLake"),
    },
    {
      id: "homeSlider3",
      src: slide3,
      alt: t("home_slider_artvin_dom"),
    },
    {
      id: "homeSlider4",
      src: slide4,
      alt: t("home_slider_artvin_seyitler_campus"),
    },
    {
      id: "homeSlider5",
      src: slide5,
      alt: t("home_slider_artvin_main_campus"),
    },
  ];
  return (
    <div className="slider">
      <div className="slider-container">
        <Carousel showThumbs={false} showStatus={false} autoPlay={true}>
          {slides.map((slide) => {
            return (
              <div>
                <img src={slide.src} alt={slide.alt} />
                <p className="legend">{slide.alt}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
