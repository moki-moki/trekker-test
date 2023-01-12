import React from "react";

function IncomeField({ title, number }) {
  return (
    <div className="flex-1 rounded-md border-2 border-gray p-2">
      <h6 className="text-lightGray font-bold">
        {title}
      </h6>
      <span className="block text-3xl text-center my-3">
        $
        {number}
      </span>
    </div>
  );
}

export default IncomeField;
