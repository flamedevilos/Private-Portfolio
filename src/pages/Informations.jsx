import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import { MdAdsClick } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import TimeLineCareer from "../components/TimeLineCareer";
import TimeLineEducation from "../components/TimeLineEducation";
import TimeLineKnowledge from "../components/TimeLineKnowledge";
import PdfBtn from "../components/PdfBtn";
import PersonData from "../components/PersonData";
import "aos/dist/aos.css";
import AOS from "aos";

const Informations = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className="max-w-5xl py-20 justify-self-center tracking-wide text-pretty max-md:py-10">
        <div>
          <h1
            className="text-center text-5xl font-bold font-titles drop-shadow-white-shadow"
            data-aos="zoom-in-up"
          >
            {t("iTitle")}{" "}
            <span className="text-5xl text-neon max-md:text-2xl">
              {" "}
              {t("iSubTitle")}
            </span>
          </h1>

          <div className="collapse collapse-open pt-10" data-aos="fade-left">
            <div className="collapse-content">
              <PersonData />
            </div>
          </div>
        </div>
        <div className="divider divider-info">
          <a
            className="animate-pulse flex items-center font-semibold max-md:text-sm"
            href="#next-colappse"
          >
            {t("divid")} <RiArrowDownDoubleLine className="text-xl" />
          </a>
        </div>

        <div
          className="collapse collapse-open my-3 py-4 max-w-4xl"
          id="next-colappse"
        >
          <input type="checkbox" />
          <div className="collapse-title">
            <MdAdsClick className="w-6 h-6 fill-cyan-500 max-md:w-4" />
            {t("iUnderTitle3")}{" "}
            <span className="text-2xl text-cyan-400 max-md:text-xl">
              {" "}
              {t("iUnderTitle4")}
            </span>
          </div>
          <div className="collapse-content" data-aos="zoom-in-up">
            <TimeLineCareer />
          </div>
        </div>

        <div className="collapse collapse-open my-3 py-4 max-w-4xl">
          <input type="checkbox" />
          <div className="collapse-title">
            <MdAdsClick className="w-6 h-6 fill-cyan-500 max-md:w-4" />
            {t("iUnderTitle5")}{" "}
            <span className="text-2xl text-cyan-400 max-md:text-xl">
              {" "}
              {t("iUnderTitle6")}
            </span>
          </div>
          <div className="collapse-content" data-aos="zoom-in-up">
            <TimeLineEducation />
          </div>
        </div>

        <div className="collapse collapse-open my-3 py-4 max-w-4xl">
          <input type="checkbox" />
          <div className="collapse-title">
            <MdAdsClick className="w-6 h-6 fill-cyan-500 max-md:w-4" />
            {t("iUnderTitle7")}{" "}
            <span className="text-2xl text-cyan-400 max-md:text-xl">
              {" "}
              {t("iUnderTitle8")}
            </span>
          </div>
          <div className="collapse-content" data-aos="zoom-in-up">
            <TimeLineKnowledge />
          </div>
        </div>

        <div className="collapse collapse-open py-2">
          <input type="checkbox" />
          <div className="collapse-title pdf-down">
            <FaRegFilePdf className="w-5 h-5 fill-yellow-500" />
            {t("download_parag")}{" "}
          </div>
          <div className="collapse-content" data-aos="fade-left">
            <PdfBtn />
          </div>
        </div>
      </section>
    </>
  );
};

export default withTranslation("translation")(Informations);
