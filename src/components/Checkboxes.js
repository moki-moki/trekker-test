import React from "react";

function Checkboxes({ text, name, checkHandler }) {
  return (
    <>
      <input className="hidden radio" name="detail-income" id={name} type="radio" onChange={checkHandler} />
      <label className="cursor-pointer mr-3 mt-3 rounded-lg border-2 border-gray hover:border-green ease-in duration-200" htmlFor={name}>
        {text}
      </label>
    </>
  );
}

export default Checkboxes;
