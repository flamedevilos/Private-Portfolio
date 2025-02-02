import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { IoLanguageSharp } from "react-icons/io5";
import { FaRegAddressCard, FaCar } from "react-icons/fa";
import { MdSportsBar } from "react-icons/md";
import { MdSportsScore } from "react-icons/md";
import { GiTv } from "react-icons/gi";
import FRAN from "../img/FRAN.png";
import ARB from "../img/ARB.jpg";
import FRE from "../img/FRE.jpg";
import ENG from "../img/ENG.png";
import DEU from "../img/DEU.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const TimeLineKnowledge = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex flex-row items-start justify-center py-6 gap-6 tracking-wide text-pretty max-md:flex-col">
        <h3
          className="flex text-xl font-semibold items-center"
          data-aos="fade-right"
        >
          <IoLanguageSharp className="h-5 w-5 fill-white drop-shadow-mix-shadow" />
          <span className="px-3 italic max-md:text-base">{t("langsDesc")}</span>
        </h3>
        <ul className="flex flex-col items-baseline px-8" data-aos="fade-left">
          <li className="timeline timeline-compact flex items-center justify-center pb-3">
            <div className="timeline-middle">
              <img
                src={FRAN}
                alt="Francophone Lang"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="timeline-end">
              <h5 className="flex flex-col text-base font-bold max-md:text-base">
                {t("lang_name1")}
                <p className="text-sm italic font-medium">{t("niveau1")}</p>
              </h5>
            </div>
          </li>
          <li className="timeline timeline-compact flex items-center justify-center pb-3">
            <div className="timeline-middle">
              <img
                src={ARB}
                alt="Arabic Lang"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="timeline-end">
              <h5 className="flex flex-col text-base font-bold max-md:text-base">
                {t("lang_name2")}
                <p className="text-sm italic font-medium">{t("niveau2")}</p>
              </h5>
            </div>
          </li>
          <li className="timeline timeline-compact flex items-center justify-center pb-3">
            <div className="timeline-middle">
              <img
                src={FRE}
                alt="FRENCH Lang"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="timeline-end">
              <h5 className="flex flex-col text-base font-bold max-md:text-base">
                {t("lang_name3")}
                <p className="text-sm italic font-medium">{t("niveau3")}</p>
              </h5>
            </div>
          </li>
          <li className="timeline timeline-compact flex items-center justify-center pb-3">
            <div className="timeline-middle">
              <img
                src={ENG}
                alt="English Lang"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="timeline-end">
              <h5 className="flex flex-col text-base font-bold max-md:text-base">
                {t("lang_name4")}
                <p className="text-sm italic font-medium">{t("niveau4")}</p>
              </h5>
            </div>
          </li>
          <li className="timeline timeline-compact flex items-center justify-center pb-3">
            <div className="timeline-middle">
              <img
                src={DEU}
                alt="Deutsch Lang"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="timeline-end">
              <h5 className="flex flex-col text-base font-bold max-md:text-base">
                {t("lang_name5")}
                <p className="text-sm italic font-medium">{t("niveau5")}</p>
              </h5>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-start justify-center py-6 gap-6 tracking-wide text-pretty max-md:flex-col">
        <h3
          className="flex text-xl font-semibold items-center"
          data-aos="fade-right"
        >
          <MdSportsBar className="h-5 w-5 fill-yellow-300 drop-shadow-white-shadow" />
          <span className="px-3 italic max-md:text-base">{t("hobsDesc")}</span>
        </h3>
        <ul className="flex flex-col items-baseline px-10" data-aos="fade-left">
          <li className="timeline timeline-compact flex items-center justify-center pb-3">
            <div className="timeline-middle">
              <GiTv className="h-5 w-5 fill-white" />
            </div>
            <div className="timeline-end">
              <h5 className="flex items-center gap-2 text-base font-bold max-md:text-base">
                {t("hobby1")}
                <p className="text-sm italic font-medium">{t("hobbyDesc1")}</p>
              </h5>
            </div>
          </li>
          <li className="timeline timeline-compact flex items-center justify-center pb-3">
            <div className="timeline-middle">
              <MdSportsScore className="h-5 w-5 fill-white" />
            </div>
            <div className="timeline-end">
              <h5 className="flex items-center gap-2 text-base font-bold max-md:text-base">
                {t("hobby2")}
                <p className="text-sm italic font-medium">{t("hobbyDesc2")}</p>
              </h5>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex flex-row items-start justify-center pt-6 gap-6 tracking-wide text-pretty max-md:flex-col">
        <h3
          className="flex text-xl font-semibold items-center"
          data-aos="fade-right"
        >
          <FaCar className="h-5 w-5 fill-cyan-200 drop-shadow-white-shadow" />
          <span className="pl-3 italic max-md:text-base">{t("others")}</span>
        </h3>
        <ul
          className="flex flex-col items-baseline pl-12 max-md:pl-8"
          data-aos="fade-left"
        >
          <li className="timeline timeline-compact flex items-center justify-center pb-3">
            <div className="timeline-middle">
              <FaRegAddressCard className="h-5 w-5 fill-cyan-300" />
            </div>
            <div className="timeline-end">
              <h5 className="flex items-center gap-2 text-base font-bold max-md:text-base">
                {t("licClass")}
                <p className="text-sm italic font-medium max-md:text-sm">
                  {t("licDate")}
                </p>
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default withTranslation("translation")(TimeLineKnowledge);
