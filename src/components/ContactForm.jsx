import React, { useState } from "react";

const ContactForm = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, errorAlert, onChange, id, ...inputProps } = props;
  const handelFocus = (e) => {
    setFocus(true);
  };
  return (
    <>
      <div className="flex items-center gap-3">
        <label>{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handelFocus}
          focus={focus.toString()}
        />
      </div>
      <span className="errors-span">{errorAlert}</span>
    </>
  );
};

export default ContactForm;
