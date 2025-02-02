import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Emo from "../img/sadEmoji.png";
import "aos/dist/aos.css";
import AOS from "aos";

const NoPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex gap-6 items-center justify-center py-20 max-md:flex-col">
        <img
          src={Emo}
          alt="Sad Emojy"
          className="max-w-44 max-md:max-w-36"
          data-aos="fade-right"
        />
        <div data-aos="fade-left">
          <h1 className="pb-6 text-6xl font-titles font-bold tracking-wide text-pretty text-crimson max-md:text-2xl">
            ERROR 404
          </h1>

          <p className="w-2/4 tracking-wide text-pretty">
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable. I do apologise on it's
            behalf.
          </p>
          <p className="tracking-wide text-pretty">
            &#x1F449; Please try go back to the{" "}
            <Link to="/" className="text-sky-400 font-bold">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default NoPage;
