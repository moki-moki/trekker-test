import React from "react";

function Button({ text, isActive, fn, icon }) {
  return (
    <button className={`mt-5 mr-2  ${isActive ? "bg-green" : "bg-gray"} flex items-center`} type="button" disabled={!isActive} onClick={fn}>
      {text}
      {icon}
    </button>
  );
}

export default Button;

