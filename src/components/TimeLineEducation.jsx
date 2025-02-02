import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import CIT from "../img/ciT-Leipzig.jpg";
import DAA from "../img/DAA.png";
import VMKB from "../img/VMKB.png";
import Euro from "../img/EuroSchul.jpg";
import FSEGT from "../img/logo-Fsegt.png";
import IMSET from "../img/IMSET.png";
import IAHF from "../img/IAHF.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const TimeLineEducation = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <ul className="timeline timeline-snap-icon pt-6 max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <img src={CIT} alt="CIT Local" className="w-14 h-14 rounded-full" />
          </div>
          <div
            className="timeline-start mb-10 md:text-end"
            data-aos="fade-right"
          >
            <time className="font-mono italic">{t("ieYear1")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("ieLocat1")}
            </div>
            <p className="italic max-md:text-sm">{t("ieForm1")}</p>
            <p className="italic max-md:text-sm">{t("ieCert1")}</p>
          </div>
          <hr />
        </li>

        <li>
          <div className="timeline-middle">
            <img src={DAA} alt="DAA Local" className="w-14 h-14 rounded-full" />
          </div>
          <div className="timeline-end md:mb-10" data-aos="fade-left">
            <time className="font-mono italic">{t("ieYear2")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("ieLocat2")}
            </div>
            <p className="italic max-md:text-sm">{t("ieForm2")}</p>
            <p className="italic max-md:text-sm">{t("ieCert2")}</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={VMKB}
              alt="VMKB Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div
            className="timeline-start mb-10 md:text-end"
            data-aos="fade-right"
          >
            <time className="font-mono italic">{t("ieYear3")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("ieLocat3")}
            </div>
            <p className="italic max-md:text-sm">{t("ieForm3")}</p>
            <p className="italic max-md:text-sm">{t("ieCert3")}</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={Euro}
              alt="EuroSchulen Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="timeline-end md:mb-10" data-aos="fade-left">
            <time className="font-mono italic">{t("ieYear4")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("ieLocat4")}
            </div>
            <p className="italic max-md:text-sm">{t("ieForm4")}</p>
            <p className="italic max-md:text-sm">{t("ieCert4")}</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={FSEGT}
              alt="FSEGT Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div
            className="timeline-start mb-10 md:text-end"
            data-aos="fade-right"
          >
            <time className="font-mono italic">{t("ieYear5")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("ieLocat5")}
            </div>
            <p className="italic max-md:text-sm">{t("ieForm5")}</p>
            <p className="italic max-md:text-sm">{t("ieCert5")}</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={IMSET}
              alt="IMSET Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div className="timeline-end md:mb-10" data-aos="fade-left">
            <time className="font-mono italic">{t("ieYear6")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("ieLocat6")}
            </div>
            <p className="italic max-md:text-sm">{t("ieForm6")}</p>
            <p className="italic max-md:text-sm">{t("ieCert6")}</p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src={IAHF}
              alt="IAHF Local"
              className="w-14 h-14 rounded-full"
            />
          </div>
          <div
            className="timeline-start mb-10 md:text-end"
            data-aos="fade-right"
          >
            <time className="font-mono italic">{t("ieYear7")}</time>
            <div className="text-base font-bold tracking-wide text-pretty">
              {t("ieLocat7")}
            </div>
            <p className="italic max-md:text-sm">{t("ieForm7")}</p>
            <p className="italic max-md:text-sm">{t("ieCert7")}</p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default withTranslation("translation")(TimeLineEducation);
