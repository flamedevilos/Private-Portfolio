import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { IoHome } from "react-icons/io5";
import { MdFeaturedPlayList } from "react-icons/md";
import { BsEnvelopeAtFill, BsInfoCircle } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import LangSelector from "./LangSelector";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ t }) => {
  const [navMenu, setnavMenu] = useState(false);
  const handelClick = () => setnavMenu(!navMenu);
  return (
    <>
      <div
        className={
          navMenu
            ? "navigation-bar stretched black-glass"
            : "navigation-bar black-glass"
        }
      >
        <div className="flex-1">
          <Link to="/" className="app-name">
            {t("app_fname")}
            <span className="text-crimson">{t("app_lname")}</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu">
            <li className="navigation-list">
              <NavLink to="/">
                <IoHome className="w-4 h-4 fill-white" />
                {t("link_name1")}
              </NavLink>
            </li>
            <li className="navigation-list">
              <NavLink to="/Informations">
                <BsInfoCircle className="w-4 h-4 fill-blue-600" />
                {t("link_name2")}
              </NavLink>
            </li>
            <li className="navigation-list">
              <NavLink to="/Features">
                <MdFeaturedPlayList className="w-4 h-4 fill-yellow-500" />
                {t("link_name3")}
              </NavLink>
            </li>
            <li className="navigation-list">
              <NavLink to="/Contact">
                <BsEnvelopeAtFill className="w-4 h-4 fill-green-500" />
                {t("link_name4")}
              </NavLink>
            </li>
            <li className="navigation-list">
              <LangSelector />
            </li>
          </ul>
        </div>

        {/* resp.section*/}
        <button className="nav-btn" onClick={handelClick}>
          {navMenu ? (
            <IoClose className="w-6 h-6 fill-crimson" />
          ) : (
            <CgMenuGridO className="w-6 h-6 fill-current" />
          )}
        </button>
      </div>
    </>
  );
};

export default withTranslation("translation")(Navbar);
