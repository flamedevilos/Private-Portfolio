import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import Pisol from "../img/Markkleeberger.jpg";
import Tunis from "../img/tunisie.jpg";
import Mezzo from "../img/Mezzo.jpeg";
import SBH from "../img/sbhse.jpg";
import Bayrout from "../img/auto-station.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const TimeLineCareer = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <ul className="timeline timeline-snap-icon pt-6 max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <img
              src={Pisol}
              alt="PiSolution Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div
            className="timeline-start mb-10 md:text-end"
            data-aos="fade-right"
          >
            <time className="font-mono italic">{t("iYear1")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("iLocation1")}
            </div>
            <p className="italic max-md:text-sm">{t("iJob1")}</p>
            <p className="italic max-md:text-sm">{t("iOccup1")}</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={Tunis}
              alt="Chroniquec AG Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="timeline-end md:mb-10" data-aos="fade-left">
            <time className="font-mono italic">{t("iYear2")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("iLocation2")}
            </div>
            <p className="italic max-md:text-sm">{t("iJob2")}</p>
            <p className="italic max-md:text-sm">{t("iOccup2")}</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={Mezzo}
              alt="Mezzo Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div
            className="timeline-start mb-10 md:text-end"
            data-aos="fade-right"
          >
            <time className="font-mono italic">{t("iYear3")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("iLocation3")}
            </div>
            <p className="italic max-md:text-sm">{t("iJob3")}</p>
            <p className="italic max-md:text-sm">{t("iOccup3")}</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={SBH}
              alt="Sbhse Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="timeline-end md:mb-10" data-aos="fade-left">
            <time className="font-mono italic">{t("iYear4")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("iLocation4")}
            </div>
            <p className="italic max-md:text-sm">{t("iJob4")}</p>
            <p className="italic max-md:text-sm">{t("iOccup4")}</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={Bayrout}
              alt="Auto Station Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div
            className="timeline-start mb-10 md:text-end"
            data-aos="fade-right"
          >
            <time className="font-mono italic">{t("iYear5")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("iLocation5")}
            </div>
            <p className="italic max-md:text-sm">{t("iJob5")}</p>
            <p className="italic max-md:text-sm">{t("iOccup5")}</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default withTranslation("translation")(TimeLineCareer);
