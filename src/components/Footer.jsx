import React from "react";
import { withTranslation } from "react-i18next";

const Footer = ({ t }) => {
  return (
    <>
      <footer className="footer footer-center text-white italic">
        <aside>
          <p className="text-pretty max-md:text-sm">
            {t("footer1")} © 2022 - {new Date().getFullYear()} - {t("footer2")}{" "}
            <span className="text-yellow-300">{t("footer3")}</span>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default withTranslation("translation")(Footer);
