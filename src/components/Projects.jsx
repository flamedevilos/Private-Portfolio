import React from "react";
import DynW from "../img/dynamic_Web.png";
import NoServ from "../img/img503.jpg";
import { FaGitSquare } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { withTranslation } from "react-i18next";
import "aos/dist/aos.css";

const Projects = ({ t }) => {
  const projectDatail = [
    {
      id: 1,
      cardImg: DynW,
      cardImgAlt: "Dynamic Template img",
      cardTitle: t("f_card_title_proj1"),
      cardTheme: t("f_card_title_proj_th1"),
      cardThemeName: t("f_card_title_proj_th1_name"),
      cardProgLangTitle: t("f_card_progr_lang_title1"),
      cardProgLangTitleName: t("f_card_progr_lang_title1_name1"),
      cardThemeDesc: t("f_card_title_proj_th1_desc1"),
      cardParag: t("f_card_parag_p1"),
      cardLinking: t("f_card_parag_p1_link_desc"),
      cardLinkingTo: "https://github.com/flamedevilos/DynamicWeb",
      cardLinkIcon1: <CiLink className="w-6 h-6 fill-yellow-400" />,
      cardLinkIcon2: <FaGitSquare className="w-6 h-6 fill-crimson" />,
    },

    {
      id: 2,
      cardImg: NoServ,
      cardImgAlt: "Not Available Icon",
      cardTitle: t("f_card_not_available"),
      cardTheme: t("f_card_title_proj_th1"),
      cardThemeName: "...",
      cardProgLangTitle: t("f_card_progr_lang_title1"),
      cardProgLangTitleName: "...",
      cardThemeDesc: t("f_card_title_proj_th1_desc1"),
      cardParag: "...",
      cardLinking: t("f_card_not_available"),
      cardLinkingTo: t("f_card_not_available"),
      cardLinkIcon1: <CiLink className="w-6 h-6 fill-slate-400/50" />,
      cardLinkIcon2: <FaGitSquare className="w-6 h-6 fill-slate-400/50" />,
    },

    {
      id: 3,
      cardImg: NoServ,
      cardImgAlt: "Not Available Icon",
      cardTitle: t("f_card_not_available"),
      cardTheme: t("f_card_title_proj_th1"),
      cardThemeName: "...",
      cardProgLangTitle: t("f_card_progr_lang_title1"),
      cardProgLangTitleName: "...",
      cardThemeDesc: t("f_card_title_proj_th1_desc1"),
      cardParag: "...",
      cardLinking: t("f_card_not_available"),
      cardLinkingTo: t("f_card_not_available"),
      cardLinkIcon1: <CiLink className="w-6 h-6 fill-slate-400/50" />,
      cardLinkIcon2: <FaGitSquare className="w-6 h-6 fill-slate-400/50" />,
    },
  ];

  return (
    <>
      <div
        className="py-10 flex justify-around max-md:flex-col gap-4"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {projectDatail.map(
          ({
            id,
            cardImg,
            cardImgAlt,
            cardTitle,
            cardTheme,
            cardThemeName,
            cardProgLangTitle,
            cardProgLangTitleName,
            cardThemeDesc,
            cardParag,
            cardLinking,
            cardLinkingTo,
            cardLinkIcon1,
            cardLinkIcon2,
          }) => (
            <div
              className="card card-compact w-64 black-glass shadow-xl ease-out duration-200 hover:bg-black/50 hover:drop-shadow-white-shadow"
              key={id}
            >
              <figure>
                <img src={cardImg} alt={cardImgAlt} className="w-72 h-48" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-sky-300">{cardTitle}</h2>

                <div>
                  <h3 className="text-yellow-400 text-sm font-semibold">
                    {cardTheme}{" "}
                    <span className="text-sm font-medium italic">
                      {cardThemeName}
                    </span>
                  </h3>
                  <h3 className="text-yellow-400 text-sm font-semibold">
                    {cardProgLangTitle}{" "}
                    <span className="text-sm font-normal italic">
                      {cardProgLangTitleName}
                    </span>
                  </h3>
                  <h3 className="text-yellow-400 text-sm font-semibold">
                    {cardThemeDesc}{" "}
                    <span className="text-sm font-normal italic">
                      {cardParag}
                    </span>
                  </h3>
                </div>

                <a
                  href={cardLinkingTo}
                  className="flex items-center gap-2 link link-info ease-out duration-200 cursor-pointer hover:font-semibold hover:link-primary"
                >
                  <span>{cardLinkIcon1}</span> {cardLinking}{" "}
                  <span>{cardLinkIcon2}</span>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default withTranslation("translation")(Projects);
