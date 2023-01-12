import React, { useEffect, useState } from "react";
import { options } from "../data/data";
import Button from "./Button";
import Checkboxes from "./Checkboxes";
import Title from "./Title";
import ArrowForward from "../assets/svgs/arrow-forward";

function IncomeDetails({ setIsActive, inputHandler, inputValue, stepHandler, dateHandler }) {
  const [isChecked, setIsChecked] = useState(false);

  function checkHandler() {
    setIsChecked(true);
  }

  function allowNextStep() {
    if (inputValue.length > 0 && isChecked) setIsActive(true);
  }

  useEffect(() => {
    allowNextStep();
  }, [inputValue, isChecked]);

  return (
    <>
      <Title text="Tax income calculation" />
      <div className="my-3">
        <h5>Enter the tax</h5>
        <div className="flex max-sm:flex-col">
          <label
            className="text-xl bg-gray rounded-l-md flex items-center max-sm:rounded-r-md"
            htmlFor="value"
          >
            $
            <input
              className="rounded-none w-full"
              id="value"
              name="valute"
              placeholder="0.00"
              type="text"
              onChange={inputHandler}
              value={inputValue}
            />
          </label>
          <select
            className="p-2 bg-gray rounded-r-md border-l-2 border-l-cardBg text-white cursor-pointer max-sm:my-3 max-sm:rounded-md"
            onChange={dateHandler}
            defaultValue="Weekly"
          >
            {options.map((el) => (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
        {inputValue.length > 0 ? (
          <div className="mt-5">
            <h5>Choose an income type</h5>
            <fieldset className="after:content-[''] after:w-full after:h-1 after:bg-gray after:block after:rounded-md after:mt-5">
              <Checkboxes name="gross-income" text="Gross income" checkHandler={checkHandler} />
              <Checkboxes name="net-income" text="Net income" checkHandler={checkHandler} />
            </fieldset>
            {isChecked ? (
              <Button
                text="Calculate income"
                isActive={isChecked}
                fn={stepHandler}
                icon={<ArrowForward />}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}

export default IncomeDetails;

