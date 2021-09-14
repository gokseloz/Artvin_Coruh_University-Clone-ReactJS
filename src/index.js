import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from "./App";
import { AppProvider } from "./context";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "tr"],
    fallbackLng: "tr",
    detection: {
      order: ["cookie", "htmlTag", "querystring", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: { loadPath: "/assets/locales/{{lng}}/translation.json" },
    react: { useSuspense: false },
  });

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
