import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import Cards from "../components/Cards";
import Projects from "../components/Projects";
import "aos/dist/aos.css";
import AOS from "aos";

const Features = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="max-w-5xl py-20 justify-self-center tracking-wide text-pretty max-md:py-10">
        <div
          role="alert"
          className="alert watter-glass max-md:text-sm"
          data-aos="fade-left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span data-aos="fade-left" data-aos-duration="3000">
            {t("f_note")}
          </span>
        </div>
        <div className="pt-12">
          <h1
            className="text-5xl font-bold font-titles drop-shadow-white-shadow"
            data-aos="zoom-in-up"
          >
            {t("features_title")}
          </h1>
          <p className="pt-4" data-aos="fade-left" data-aos-duration="3000">
            {t("f_desc1")}
          </p>
          <p className="pt-2 pb-4" data-aos="fade-left">
            {t("f_desc2")} {t("f_desc3")}
          </p>
        </div>

        <div className="py-3">
          <h1
            className="text-3xl font-bold drop-shadow-white-shadow max-md:text-xl"
            data-aos="zoom-in-up"
          >
            {t("feat_subtitle1")}{" "}
            <span className="text-3xl text-cyan-400/80 max-md:text-xl">
              {t("feat_subtitle2")}
            </span>
          </h1>
          <div data-aos="fade-left" data-aos-duration="2000">
            <p className="pt-4">{t("feat_desc1")}</p>
            <p>
              {t("feat_desc2")} {t("feat_desc3")}
            </p>
          </div>

          <Cards />
        </div>

        <div className="py-2">
          <h1
            className="text-3xl font-bold drop-shadow-white-shadow max-md:text-xl"
            data-aos="zoom-in-up"
          >
            {t("feat_subtitle3")}{" "}
            <span className="text-3xl text-cyan-400/80 max-md:text-xl">
              {t("feat_subtitle4")}
            </span>
          </h1>
          <Projects />
        </div>
      </section>
    </>
  );
};

export default withTranslation("translation")(Features);
