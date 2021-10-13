import React from "react";
import "./RoundedIcons.scss";
const RoundedIcons = ({ className, icon }) => {
  const style = {
    border: "none",
    padding: "2rem",
    borderRadius: "50%",
  };
  return (
    <div>
      <button className={className} style={style}>
        <img src={icon} alt={icon} />
      </button>
    </div>
  );
};

export default RoundedIcons;
