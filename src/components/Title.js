import React from "react";

function Title({ text }) {
  return (
    <h3 className="title after:content-[''] after:w-full after:h-1 after:bg-gray after:block after:rounded-md after:my-3">
      {text}
    </h3>
  );
}

export default Title;

