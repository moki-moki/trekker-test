import React from "react";
import { options } from "../data/data";
import Button from "./Button";
import IncomeField from "./IncomeField";
import Title from "./Title";
import ArrowBack from "../assets/svgs/arrow-back";

function Income({ stepHandler, date, setData }) {
  function changeData(e) {
    setData((prev) => ({ ...prev, date: e.target.innerText }));
  }

  return (
    <>
      <Title text={`${date} income calculation`} />
      <div className="flex justify-around max-sm:overflow-scroll">
        {options.map((el) => (
          <button
            className={`${
              date === el.name ? "text-white" : "text-lightGray"
            } font-bold cursor-pointer border-none`}
            key={el.id}
            type="button"
            onClick={changeData}
          >
            {el.name}
          </button>
        ))}
      </div>
      <div className="bg-darkGreen rounded-md my-5 mx-auto p-5 w-2/4 max-sm:w-full">
        <h6 className="text-lightGray font-bold">
          {date}
          net income
        </h6>
        <span className="block text-3xl text-center my-3">
          $
          {Math.floor(Math.random() * 5050 - 10 + 1) + 10}
        </span>
      </div>
      <div className="flex gap-2 max-sm:flex-col">
        <IncomeField title="Gross income" number={Math.floor(Math.random() * 200 - 10 + 1) + 10} />
        <IncomeField title="Tax" number={Math.floor(Math.random() * 50 - 10 + 1) + 10} />
      </div>
      <Button text="Go Back" isActive fn={stepHandler} icon={<ArrowBack />} />
    </>
  );
}

export default Income;

