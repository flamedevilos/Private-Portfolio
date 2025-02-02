import React, { useEffect } from "react";
import { withTranslation } from "react-i18next";
import "aos/dist/aos.css";
import AOS from "aos";

const Load = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="loader" data-aos="zoom-in-up" data-testid="loading">
        <div className="ring1"></div>
        <div className="ring1"></div>
        <div className="ring1"></div>
        <span>{t("loader")}</span>
      </div>
    </>
  );
};

export default withTranslation("translation")(Load);
