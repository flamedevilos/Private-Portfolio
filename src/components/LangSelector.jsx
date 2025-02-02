import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import Flag from "react-flagkit";
import { FaGlobe } from "react-icons/fa";
import Cookies from "js-cookie";
import i18next from "i18next";

const languages = [
  { code: "en", name: "English", country_flLinkg: <Flag country="GB" /> },
  { code: "fr", name: "Français", country_flLinkg: <Flag country="FR" /> },
  { code: "de", name: "Deutsch", country_flLinkg: <Flag country="DE" /> },
  { code: "ar", name: "العربية", country_flLinkg: <Flag country="TN" /> },
];

const LangSelector = ({ t }) => {
  const currentLang = Cookies.get("i18next") || "en";

  useEffect(() => {
    window.document.dir = i18next.dir();
  }, [currentLang]);
  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end lang-select">
        <div
          tabIndex={0}
          role="button"
          className="flex flex-row items-center gap-2"
        >
          <FaGlobe className="w-4 h-4 fill-blue-600" /> {t("link_name5")}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content rounded-md z-[1] w-36 p-2 max-md:bg-zinc-600/50"
        >
          {languages &&
            languages.map(({ code, name, country_flLinkg }, index) => (
              <li
                key={index}
                onClick={() => i18next.changeLanguage(code)}
                className={
                  currentLang === code
                    ? "bg-slate-700 drop-shadow-white-shadow font-semibold rounded-md active"
                    : "hover:bg-zinc-300/50 rounded-md"
                }
              >
                <span>
                  {country_flLinkg} {name}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default withTranslation("translation")(LangSelector);
