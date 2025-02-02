import React from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const BackTopBtn = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <button className="right-0">
        <FaRegArrowAltCircleUp
          className="absolute fill-sky-100/50 w-10 h-10 rounded-full right-16 -mt-28 ease-in duration-100 cursor-pointer hover:fill-white hover:drop-shadow-white-shadow max-md:right-8"
          onClick={top}
        />
      </button>
    </>
  );
};

export default BackTopBtn;
