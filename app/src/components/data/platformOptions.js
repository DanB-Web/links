import React from "react";
import FacebookIcon from "../../assets/platforms/icon-facebook.svg";
import CodePenIcon from "../../assets/platforms/icon-codepen.svg";
import GitHubIcon from "../../assets/platforms/icon-github.svg";

export const platformOptions = [
  {
    value: "facebook",
    label: (
      <span className="select-option">
        <FacebookIcon className="select-icon" />
        <span className="select-text">Facebook</span>
      </span>
    ),
  },
  {
    value: "codepen",
    label: (
      <span className="select-option">
        <CodePenIcon className="select-icon" />
        <span className="select-text">CodePen</span>
      </span>
    ),
  },
  {
    value: "github",
    label: (
      <span className="select-option">
        <GitHubIcon className="select-icon" />
        <span className="select-text">GitHub</span>
      </span>
    ),
  },
];
