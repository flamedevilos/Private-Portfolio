import React, { useEffect, useState } from "react";
import { withTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import "aos/dist/aos.css";
import AOS from "aos";

const Coockie = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [closing, setClosing] = useState(true);

  const [cookies, setCookie, removeCookie] = useCookies(["cookieConcent"]);

  const SetCookie = () => {
    setCookie("cookieConcent", true, { path: "/" });
  };

  const RemoveCookie = () => {
    removeCookie("cookieConcent", false, { path: "/" });
    setClosing(!closing);
  };

  return (
    <>
      {closing && (
        <div>
          {!cookies.cookieConcent && (
            <div
              role="alert"
              className="alert watter-glass border-none max-md:text-sx max-lg:text-base"
              data-aos="fade-left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info h-6 w-6 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="text-sm">
                {t("cookies_text")}{" "}
                <a
                  href="https://www.privacypolicies.com/live/5b814237-e4db-48cc-8e11-3d2e471d80da"
                  className="link link-info"
                >
                  {t("cookies_policies")}
                </a>
              </span>
              <div>
                <button
                  className="btn btn-sm mr-2 bg-info text-white border-none rounded-md"
                  onClick={SetCookie}
                >
                  {t("set_cookie")}
                </button>
                <button
                  className="btn btn-sm btn-error text-white border-none rounded-md"
                  onClick={RemoveCookie}
                >
                  {t("decline_cookie")}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default withTranslation("translation")(Coockie);
