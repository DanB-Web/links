import React from "react";
import EmailIcon from "../../assets/icons/icon-email.svg";

const FormEmailInput = ({ placeholder = "Email input" }) => {
  return (
    <div className="form-input">
      <EmailIcon />
      <input type="email" placeholder={placeholder} />
    </div>
  );
};

export default FormEmailInput;
