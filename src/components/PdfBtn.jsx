import React from "react";
import { withTranslation } from "react-i18next";
import CVEng from "../pdf/CV_mastouri_EN.pdf";
import CVFr from "../pdf/CV_mastouri_FR.pdf";
import CVDe from "../pdf/CV_mastouri_DE.pdf";
import CVAr from "../pdf/CV_mastouri_AR.pdf";
import { MdDownload } from "react-icons/md";
import Flag from "react-flagkit";

const PdfBtn = ({ t }) => {
  return (
    <>
      <div className="py-6 flex flex-row justify-center gap-2 max-md:flex-col">
        <a href={CVEng} download={CVEng}>
          <button className="download-btn">
            <Flag country="GB" className="w-4 h-4" />
            {t("download_en")}
            <MdDownload className="w-4 h-4 fill-slate-400" />
          </button>
        </a>
        <a href={CVFr} download={CVFr}>
          <button className="download-btn">
            <Flag country="FR" className="w-4 h-4" />
            {t("download_fr")} <MdDownload className="w-4 h-4 fill-slate-400" />
          </button>
        </a>
        <a href={CVDe} download={CVDe}>
          <button className="download-btn">
            <Flag country="DE" className="w-4 h-4" />
            {t("download_de")} <MdDownload className="w-4 h-4 fill-slate-400" />
          </button>
        </a>
        <a href={CVAr} download={CVAr}>
          <button className="download-btn">
            <Flag country="TN" className="w-4 h-4" />
            {t("download_ar")} <MdDownload className="w-4 h-4 fill-slate-400" />
          </button>
        </a>
      </div>
    </>
  );
};

export default withTranslation("translation")(PdfBtn);
