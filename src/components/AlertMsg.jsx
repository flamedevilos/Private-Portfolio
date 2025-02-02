import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "aos/dist/aos.css";
import AOS from "aos";

const AlertMsg = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [closeBtn, setCloseBtn] = useState(true);

  const closeAlert = () => {
    setCloseBtn(!closeBtn);
  };
  return (
    <>
      {closeBtn && (
        <div
          role="alert"
          className="alert green-glass mb-4 max-md:flex"
          data-aos="zoom-in-up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <p className="text-sm text-white tracking-wide font-semibold text-pretty items-center justify-center max-md:text-xs">
            <span className="text-green-grass">{t("alert-msg")}</span>{" "}
            {t("alert-clear")}
          </p>
          <IoIosCloseCircleOutline
            className="w-6 h-6 fill-crimson ease-in duration-200 cursor-pointer hover:fill-slate-500"
            onClick={closeAlert}
          />
        </div>
      )}
    </>
  );
};

export default withTranslation("translation")(AlertMsg);
