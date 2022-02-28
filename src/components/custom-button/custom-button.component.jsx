import "./custom-button.styles.scss";

import React from "react";

function CustomButton({ content, isRightButton }) {
  return content ? (
    <button className={`${isRightButton ? "right-button" : ""} custom-button`}>
      {content}
    </button>
  ) : null;
}

export default CustomButton;
