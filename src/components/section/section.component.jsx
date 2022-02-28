import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./section.styles.scss";

function Section({ title, imageUrl, description, leftButtonText, rightButtonText }) {
  return (
    <div
      className="section"
      style={{
        backgroundImage: `url(/images/${imageUrl})`,
      }}
    >
      <div className="text-box">
        <h1 className="title">{title}</h1>
        <span className="subtitle">{description}</span>
      </div>
      <div className="button-container">
        <div className="button-box">
          <CustomButton content={leftButtonText} />
          <CustomButton content={rightButtonText} isRightButton />
        </div>
        <img src="/images/down-arrow.svg" alt="" className="down-arrow" />
      </div>
    </div>
  );
}

export default Section;
