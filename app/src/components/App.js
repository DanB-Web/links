import React, { useState } from "react";
import FormSelect from "./forms/FormSelect.jsx";
import FormTextInput from "./forms/FormTextInput.jsx";
import FormEmailInput from "./forms/FormEmailInput.jsx";
import { platformOptions } from "./data/platformOptions.js";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(platformOptions[0]);

  const selectHandler = (option) => {
    console.log("option", option);
    setSelectedOption(option);
  };

  return (
    <div>
      <h2 className="heading-m">Large heading</h2>
      <h3 className="heading-s">Small heading</h3>
      <p className="body-m">Body medium</p>
      <p className="body-s">Body small</p>
      <div className="flex flex-col gap-4">
        <button className="btn-primary">Primary button</button>
        <button disabled={true} className="btn-primary">
          Primary button (disabled)
        </button>
        <button className="btn-secondary">Secondary button</button>
        <button disabled={true} className="btn-secondary">
          Secondary button (disabled)
        </button>
      </div>
      <div className="flex flex-col gap-4 pt-3">
        <FormTextInput />
        <FormEmailInput />
        <FormSelect
          value={selectedOption}
          selectHandler={selectHandler}
          options={platformOptions}
        />
      </div>
      <h1>WAT</h1>
    </div>
  );
};

export default App;
