import React from "react";
import Select from "react-select";

const BOX_SHADOW =
  "rgba(190, 173, 255, 0.25) 0px 54px 55px, rgba(190, 173, 255, 0.12) 0px -12px 30px, rgba(190, 173, 255, 0.12) 0px 4px 6px, rgba(190, 173, 255, 0.17) 0px 12px 13px, rgba(190, 173, 255, 0.09) 0px -3px 5px;";

const FormSelect = ({ options, selectHandler, value }) => (
  <Select
    className="form-select"
    options={options}
    value={value}
    onChange={selectHandler}
    isSearchable={false}
    styles={{
      control: (baseStyles, state) => {
        let borderColor, borderHoverColor, boxShadow;
        if (state.isFocused) {
          borderColor = "#633Cff"; // DarkPurple
          borderHoverColor = "#633Cff";
          boxShadow = BOX_SHADOW;
        } else if (state.selectProps.isError) {
          borderColor = "#FF3939";
          borderHoverStyles = "r#FF3939d";
          boxShadow = "None";
        } else {
          borderColor = "#D9D9D9"; // Gray
          borderHoverColor = "#633Cff";
          boxShadow = "None";
        }
        return {
          ...baseStyles,
          borderWidth: 1,
          borderColor,
          boxShadow,
          "&:hover": {
            borderColor: borderHoverColor,
            boxShadow: BOX_SHADOW,
          },
        };
      },
    }}
  />
);

export default FormSelect;
