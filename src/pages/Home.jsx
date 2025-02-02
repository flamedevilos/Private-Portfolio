import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import Foto from "../img/personal_foto.png";
import VScode from "../img/vscode-icon.png";
import Laravel from "../img/laravel-icon.png";
import Rct from "../img/react-icon.png";
import MySQL from "../img/mysql-icon.png";
import Bootstrap from "../img/bootstrap-icon.png";
import Tailwind from "../img/tailwind-icon.png";
import { MdAdsClick } from "react-icons/md";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col text-center tracking-wide text-pretty">
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
            <span>{t("note")}</span>
          </div>
          <div className="max-w-2xl py-6" data-aos="zoom-in-up">
            <h1 className="flex-row text-5xl font-bold font-titles drop-shadow-white-shadow max-md:text-3xl">
              {t("home_title")}{" "}
              <span className="text-5xl text-neon max-md:text-3xl">
                {t("home_subtitle")}
              </span>
            </h1>
            <p className="py-8 text-pretty max-md:text-sm">
              {t("description")}
            </p>
            <button className="animate-bounce text-neon font-semibold">
              <a
                href="#next"
                className="flex flex-row gap-2 items-center ease-in-out duration-200 cursor-pointer hover:drop-shadow-white-shadow hover:text-white max-md:text-sm"
              >
                {t("add_link")}{" "}
                <MdAdsClick className="animate-pulse w-5 h-5 fill-cyan-500" />{" "}
                {t("add_scroll")}
                <RiArrowDownDoubleLine className="text-xl" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <legend className="px-20 tracking-wider text-pretty">
        <section className="hero min-h-screen" id="next" data-aos="fade-up">
          <div className="hero-content flex flex-col lg:flex-row-reverse gap-60 max-md:gap-10 max-lg:gap-10">
            <img
              src={Foto}
              alt="Personal foto"
              className="max-w-40 rounded-lg shadow-2xl border-double border-4 border-zinc-500 max-md:max-w-32"
            />
            <div>
              <h1 className="text-3xl font-bold drop-shadow-white-shadow max-md:text-lg">
                {t("pres_title")}{" "}
                <span className="text-3xl text-cyan-400 max-md:text-lg">
                  {t("pres_subtitle")}
                </span>
              </h1>
              <p className="pt-6 py-2 max-w-3xl max-md:text-sm">
                {t("pres_parag1")}
              </p>
              <p className="pb-4 max-w-3xl max-md:text-sm">
                {t("pres_parag2")}
              </p>
              <a
                href="/Informations"
                className="text-yellow-400 font-medium ease-in-out duration-200 cursor-pointer hover:drop-shadow-white-shadow hover:text-white max-md:text-xs"
              >
                {t("pres_link")}
              </a>
            </div>
          </div>
        </section>

        <div className="divider divider-info">
          <a
            className="animate-pulse flex items-center font-semibold max-md:text-sm"
            href="#next-section"
          >
            {t("divid")} <RiArrowDownDoubleLine className="text-xl" />
          </a>
        </div>

        <section
          id="next-section"
          className="pt-12 min-h-screen"
          data-aos="fade-up"
        >
          <div className="tracking-wide text-pretty">
            <h2 className="text-4xl font-bold drop-shadow-white-shadow max-md:text-xl">
              {t("skill_Title")}{" "}
              <span className="text-4xl text-cyan-400 max-md:text-xl">
                {t("skill_subtitle")}
              </span>
            </h2>
            <p className="pt-6 max-w-3xl max-md:text-sm">{t("skill_parag1")}</p>
            <p className="py-2 max-w-3xl max-md:text-sm">{t("skill_parag2")}</p>
            <p className="pb-6 max-w-3xl max-md:text-sm">{t("skill_parag3")}</p>
          </div>

          <div className="flex flex-col gap-10 py-6" data-aos="fade-up">
            <h4 className="text-2xl font-semibold text-cyan-200 max-md:text-lg">
              {t("progr")}
            </h4>
            <div className="flex items-center gap-4 max-md:text-sm">
              <span className="font-semibold max-md:text-sm">HTML</span>
              <progress
                className="progress progress-white max-w-3xl bg-slate-600 drop-shadow-white-shadow"
                data-aos="fade-left"
                value="80"
                max="100"
              ></progress>
              <span className="font-semibold max-md:text-sm">80%</span>
            </div>
            <div className="flex items-center gap-4 max-md:text-sm">
              <span className="font-semibold max-md:text-sm">CSS</span>
              <progress
                className="progress progress-white max-w-3xl bg-slate-600 drop-shadow-white-shadow"
                data-aos="fade-left"
                value="80"
                max="100"
              ></progress>
              <span className="font-semibold max-md:text-sm">80%</span>
            </div>
            <div className="flex items-center gap-4 max-md:text-sm">
              <span className="font-semibold max-md:text-sm">PHP</span>
              <progress
                className="progress progress-white max-w-3xl bg-slate-600 drop-shadow-white-shadow"
                data-aos="fade-left"
                value="70"
                max="100"
              ></progress>
              <span className="font-semibold max-md:text-sm">70%</span>
            </div>
            <div className="flex items-center gap-4 max-md:text-sm">
              <span className="font-semibold max-md:text-sm">JavaScript</span>
              <progress
                className="progress progress-white max-w-3xl bg-slate-600 drop-shadow-white-shadow"
                data-aos="fade-left"
                value="70"
                max="100"
              ></progress>
              <span className="font-semibold max-md:text-sm">70%</span>
            </div>
            <div className="flex items-center gap-4 max-md:text-sm">
              <span className="font-semibold max-md:text-sm">SQL</span>
              <progress
                className="progress progress-white max-w-3xl bg-slate-600 drop-shadow-white-shadow"
                data-aos="fade-left"
                value="80"
                max="100"
              ></progress>
              <span className="font-semibold max-md:text-sm">80%</span>
            </div>
            <div className="flex items-center gap-4 max-md:text-sm">
              <span className="font-semibold max-md:text-sm">
                {t("skill_maintenance")}
              </span>
              <progress
                className="progress progress-white max-w-3xl bg-slate-600 drop-shadow-white-shadow"
                data-aos="fade-left"
                value="80"
                max="100"
              ></progress>
              <span className="font-semibold max-md:text-sm">80%</span>
            </div>
          </div>

          <div className="pt-6 pb-20" data-aos="fade-up">
            <h4 className="text-2xl font-semibold text-cyan-200 max-md:text-lg">
              {t("ressource-title")}
            </h4>
            <div
              className="py-6 grid grid-flow-col grid-rows-2 gap-4 font-semibold max-md:grid-rows-6 text-sm"
              data-aos="fade-left"
            >
              <span className="flex items-center gap-2">
                <img
                  src={VScode}
                  alt="Visual Sutio Code Img"
                  className="w-12 h-8"
                />
                Visual Studio Code
              </span>
              <span className="flex items-center gap-2">
                <img src={MySQL} alt="MySQL Img" className="w-12 h-8" />
                MySQL Workbench
              </span>
              <span className="flex items-center gap-2">
                <img src={Laravel} alt="Laravel Img" className="w-12 h-8" />
                Laravel
              </span>
              <span className="flex items-center gap-2">
                <img src={Rct} alt="React Img" className="w-12 h-8" />
                React
              </span>
              <span className="flex items-center gap-2">
                <img src={Tailwind} alt="Tailwind Img" className="w-12 h-8" />
                Tailwind CSS
              </span>
              <span className="flex items-center gap-2">
                <img src={Bootstrap} alt="Bootstrap Img" className="w-12 h-8" />
                Bootstrap CSS
              </span>
            </div>
          </div>
        </section>
      </legend>
    </>
  );
};

export default withTranslation("translation")(Home);
