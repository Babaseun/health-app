import React from "react";
import "./Text.scss";
function Text({ children, className }) {
  return <div className={`custom-text ${className}`}>{children}</div>;
}

export default Text;
