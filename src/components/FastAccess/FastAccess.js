import React from "react";
import { useTranslation } from "react-i18next";
import "./FastAccess.css";
import { FaCaretRight } from "react-icons/fa";

const Fastaccess = () => {
  const { t } = useTranslation();

  const fastAccessMenu = [
    {
      id: "fastAcess1",
      text: t("home_fastAcceess_1"),
    },
    {
      id: "fastAcess2",
      text: t("home_fastAcceess_2"),
    },
    {
      id: "fastAcess3",
      text: t("home_fastAcceess_3"),
    },
    {
      id: "fastAcess4",
      text: t("home_fastAcceess_4"),
    },
    {
      id: "fastAcess5",
      text: t("home_fastAcceess_5"),
    },
    {
      id: "fastAcess6",
      text: t("home_fastAcceess_6"),
    },
    {
      id: "fastAcess7",
      text: t("home_fastAcceess_7"),
    },
    {
      id: "fastAcess8",
      text: t("home_fastAcceess_8"),
    },
    {
      id: "fastAcess9",
      text: t("home_fastAcceess_9"),
    },
    {
      id: "fastAcess10",
      text: t("home_fastAcceess_10"),
    },
  ];

  return (
    <section className="fastAccesses">
      <div className="fastAccesses-container">
        <div className="fastAccesses-heading">
          <h3 className="fastAccesses-header">{t("home_fastAccess")}</h3>
        </div>
        <div className="fastAccess-container">
          {fastAccessMenu.map((item) => (
            <div className="fastAccess-item" key={item.id}>
              <div className="fastAccess-text">
                <FaCaretRight style={{ color: "e7b040" }} />
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fastaccess;
