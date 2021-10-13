import React from "react";
import "./Button.scss";
const Button = ({ children }) => {
  return (
    <div>
      <button className={`btn text-white purple-btn`} type="button">
        {children}
      </button>
    </div>
  );
};

export default Button;
