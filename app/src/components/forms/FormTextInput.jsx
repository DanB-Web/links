import React from "react";

const FormTextInput = ({ icon = null, placeholder = "Text input" }) => {
  return (
    <div className={icon ? "form-input" : ""}>
      {icon && icon}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default FormTextInput;
