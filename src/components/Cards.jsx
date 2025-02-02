import React from "react";
import WebD from "../img/web-dev_img.jpg";
import Applic from "../img/app_img.jpg";
import Maint from "../img/maintain_img.jpg";
import { withTranslation } from "react-i18next";
import "aos/dist/aos.css";

const Cards = ({ t }) => {
  const cardDatail = [
    {
      id: 1,
      cardImg: WebD,
      cardImgAlt: "Web-devlop image",
      cardTitle: t("f_card_title1"),
      cardParag: t("f_card_parag1"),
    },
    {
      id: 2,
      cardImg: Applic,
      cardImgAlt: "Application image",
      cardTitle: t("f_card_title2"),
      cardParag: t("f_card_parag2"),
    },
    {
      id: 3,
      cardImg: Maint,
      cardImgAlt: "Maintaining image",
      cardTitle: t("f_card_title3"),
      cardParag: t("f_card_parag3"),
    },
  ];

  return (
    <>
      <div
        className="py-10 flex justify-around max-md:flex-col gap-4"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        {cardDatail.map(({ id, cardImg, cardImgAlt, cardTitle, cardParag }) => (
          <div
            className="card card-compact black-glass max-w-64 shadow-xl ease-out duration-200 cursor-pointer hover:bg-black/50 hover:drop-shadow-white-shadow"
            key={id}
          >
            <figure>
              <img src={cardImg} alt={cardImgAlt} className="w-72 h-40" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sky-300">{cardTitle}</h2>
              <p className="text-pretty tracking-wide">{cardParag}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default withTranslation("translation")(Cards);
