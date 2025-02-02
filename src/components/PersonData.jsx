import React from "react";
import { withTranslation } from "react-i18next";
import Foto from "../img/personal_foto.png";
import { FaUser, FaSnowman, FaMobile } from "react-icons/fa";
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const PersonData = ({ t }) => {
  return (
    <>
      <div className="flex items-center justify-center py-8 gap-80 max-md:flex-col-reverse max-md:gap-4 max-md:py-0">
        <ul>
          <li className="pt-6 pb-3 flex items-center gap-2 tracking-wide">
            <FaUser className="w-3 h-3 fill-cyan-500" />{" "}
            <span>{t("iname")}</span>
          </li>

          <li className="pb-3 flex items-center gap-2 tracking-wide">
            <FaMapLocationDot className="w-4 h-4 fill-lime-500" />
            <span>{t("iadd")}</span>
          </li>

          <li className="pb-3 flex items-center gap-2 tracking-wide">
            <FaSnowman className="w-4 h-4 fill-white-500" />
            <span>{t("ibirth")}</span>
          </li>

          <li className="pb-3 flex items-center gap-2 tracking-wide">
            <FaMobile className="w-4 h-4 fill-blue-700" />
            <span>{t("imobile")}</span>
          </li>

          <li className="pb-3 flex items-center gap-2 tracking-wide">
            <FaPhone className="w-4 h-4 fill-yellow-500" />
            <span>{t("iFix")}</span>
          </li>

          <li className="pb-3 flex items-center gap-2 tracking-wide">
            <MdAlternateEmail className="w-4 h-4 fill-cyan-500" />
            <span>{t("imail")}</span>
          </li>
        </ul>

        <img
          src={Foto}
          alt="My foto"
          className="max-w-36 rounded-lg shadow-2xl border-double border-4 border-zinc-500 max-md:max-w-32"
        />
      </div>
    </>
  );
};

export default withTranslation("translation")(PersonData);
