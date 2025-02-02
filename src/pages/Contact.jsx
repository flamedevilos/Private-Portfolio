import React, { useEffect, useRef, useState } from "react";
import { withTranslation } from "react-i18next";
import { FaPhone, FaRegPenToSquare } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { TbDirectionSignFilled } from "react-icons/tb";
import { FaUser, FaRegPaperPlane, FaPencilAlt } from "react-icons/fa";
import Whatsapp from "../img/whatsapp.png";
import Mail from "../img/email.png";
import AlertMsg from "../components/AlertMsg";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = ({ t }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const form = useRef();

  const [inputs, setInputs] = useState({
    sender_name: "",
    sender_email: "",
    sender_subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [errors, setErrors] = useState({});

  const handelValidation = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (inputs.sender_name === "") {
      errors.sender_name = t("error1_name");
    } else if (inputs.sender_name.length < 3) {
      errors.sender_name = t("error2_name");
    }

    if (inputs.sender_email === "") {
      errors.sender_email = t("error1_mail");
    } else if (!emailRegex.test(inputs.sender_email)) {
      errors.sender_email = t("error2_mail");
    }

    if (inputs.sender_subject === "") {
      errors.sender_subject = t("error1_subject");
    } else if (inputs.sender_subject.length < 3) {
      errors.sender_subject = t("error2_subject");
    }

    if (inputs.message === "") {
      errors.message = t("error1_request");
    } else if (inputs.message.length < 10) {
      errors.message = t("error2_request");
    }

    setErrors({ ...errors });
    return Object.keys(errors).length < 1;
  };

  const [load, setLoad] = useState(false);
  const [alertMsg, setAlertMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!handelValidation()) {
      console.log("Fail");
    } else {
      console.log(inputs);
      setLoad(true);
      setAlertMsg(true);
      setInputs({
        sender_name: "",
        sender_email: "",
        sender_subject: "",
        message: "",
      });
    }
  };

  setTimeout(() => {
    setLoad(false);
  }, 4000);

  setTimeout(() => {
    setAlertMsg(false);
  }, 5000);
  return (
    <>
      <div className="w-full px-20 py-12 justify-self-center tracking-wide text-pretty max-md:px-0">
        <div className="py-3" data-aos="fade-left">
          <div className="flex flex-row items-center justify-center gap-3 text-base max-md:flex-col max-md:text-sm">
            <span className="flex flex-row items-center gap-1">
              <FaPhone className="w-5 h-5" /> |{" "}
              <img src={Whatsapp} alt="whatsapp" className="w-5 h-5" /> : +49
              (0)152 03 788 235
            </span>{" "}
            <span className="flex flex-row items-center">
              <MdAlternateEmail className="w-5 h-5 fill-sky-600" /> :
              chroniquec@ymail.com
            </span>
          </div>
        </div>

        <div className="py-2 flex flex-row items-center justify-center gap-4">
          <h1
            className="text-6xl font-bold font-titles flex-row drop-shadow-white-shadow max-md:text-4xl"
            data-aos="zoom-in-up"
          >
            {t("contact_title")}
          </h1>
          <img
            src={Mail}
            alt="Mail Imag"
            className="w-10 h-10 max-md:w-8 max-md:h-8"
            data-aos="fade-left"
          />
        </div>
        <p
          className="text-base text-center py-3 max-md:px-5 max-md:text-sm"
          data-aos="fade-left"
        >
          {t("contact_notice")}
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full px-20 py-8 max-md:px-5"
          data-aos="fade-left"
        >
          {alertMsg ? <AlertMsg /> : null}
          <p
            className="px-10 flex items-center gap-1 label-text text-crimson text-sm font-bold animate-pulse max-md:text-sx"
            data-aos="fade-left"
          >
            <TbDirectionSignFilled className="fill-yellow-400" />
            {t("require_notice")}
          </p>

          <div className="flex flex-col items-center gap-3">
            <label className="form-control w-full">
              <div className="label items-center">
                <FaUser className="w-5 h-5 fill-white/70 mr-4" />
                <input
                  type="text"
                  placeholder={t("placeh_name")}
                  name="sender_name"
                  value={inputs.sender_name}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.sender_name ? "errors-input" : ""
                  }`}
                />
              </div>
              {errors.sender_name ? (
                <span className="errors-span">{errors.sender_name}</span>
              ) : null}
            </label>
            <label className="form-control w-full">
              <div className="label items-center">
                <MdAlternateEmail className="w-5 h-5 fill-blue-600 mr-4" />
                <input
                  type="email"
                  placeholder={t("placeh_mail")}
                  name="sender_email"
                  value={inputs.sender_email}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.sender_email ? "errors-input" : ""
                  }`}
                />
              </div>
              {errors.sender_email ? (
                <span className="errors-span">{errors.sender_email}</span>
              ) : null}
            </label>

            <label className="form-control w-full">
              <div className="label items-center">
                <FaPencilAlt className="w-5 h-5 fill-green-400/70 mr-4" />
                <input
                  type="text"
                  placeholder={t("placeh_subject")}
                  name="sender_subject"
                  value={inputs.sender_subject}
                  onChange={handleChange}
                  className={`form-input ${
                    errors.sender_subject ? "errors-input" : ""
                  }`}
                />
              </div>
              {errors.sender_subject ? (
                <span className="errors-span">{errors.sender_subject}</span>
              ) : null}
            </label>

            <label className="form-control w-full">
              <div className="label items-start">
                <FaRegPenToSquare className="w-5 h-5 fill-yellow-400/70 mr-4" />
                <textarea
                  rows={10}
                  cols={50}
                  type="text"
                  placeholder={t("placeh_request")}
                  name="message"
                  value={inputs.message}
                  onChange={handleChange}
                  className={`form-input text-area ${
                    errors.message ? "errors-input" : ""
                  }`}
                />
              </div>
              {errors.message ? (
                <span className="errors-span">{errors.message}</span>
              ) : null}
            </label>

            <p className="w2/4 pl-10 text-sm">
              {t("agreement")}{" "}
              <a
                href="https://www.privacypolicies.com/live/5b814237-e4db-48cc-8e11-3d2e471d80da"
                className="link link-info"
              >
                {t("policy")}
              </a>{" "}
              {t("clear_agreement")}
            </p>
            <button type="submit" className="submit-btn">
              {load ? (
                <span className="loading loading-bars loading-xs"></span>
              ) : (
                <>
                  {t("send_btn")}{" "}
                  <FaRegPaperPlane className="w-5 h-5 fill-sky-400/70 mr-4 ease-in-out duration-300 cursor-pointer hover:fill-sky-200" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default withTranslation("translation")(Contact);
