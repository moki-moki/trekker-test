import React, { useState } from "react";
import Income from "./components/Income";
import IncomeDetails from "./components/IncomeDetails";
import useStep from "./hooks/useStep";

const INITIAL_DATA = { inputValue: "", date: "Weekly", isChecked: false };

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [isActive, setIsActive] = useState(false);

  const stepHandler = () => {
    if (isActive) changeStep();
  };

  const inputHandler = (e) => {
    const reg = /^[\.0-9]*$/;
    if (reg.test(e.target.value) || e.target.value === "") {
      setData((prev) => ({ ...prev, inputValue: e.target.value }));
    }
  };

  const dateHandler = (e) => {
    setData((prev) => ({ ...prev, date: e.target.value }));
  };

  const { currentStep, changeStep, step } = useStep([
    <IncomeDetails
      {...data}
      setIsActive={setIsActive}
      inputHandler={inputHandler}
      stepHandler={stepHandler}
      dateHandler={dateHandler}
    />,
    <Income stepHandler={stepHandler} date={data.date} val={data.inputValue} setData={setData} />
  ]);

  return (
    <main className="h-screen bg-black">
      <div className="wrap max-lg:mx-3">
        <h4
          className={`my-3 mr-3 relative before:content-[''] before:w-full before:absolute before:h-1 ${
            step === 0 ? "before:bg-green" : "before:bg-gray"
          } before:left-0 before:-bottom-1 before:rounded-md max-sm:text-lg inline-block`}>
          Income Details
        </h4>
        <h4
          className={`my-3 mr-3 relative before:content-[''] before:w-full before:absolute before:h-1 ${
            step === 1 ? "before:bg-green" : "before:bg-gray"
          } before:left-0 before:-bottom-1 before:rounded-md max-sm:text-lg inline-block`}>
          Income
        </h4>
      </div>
      <div className="card">{currentStep}</div>
    </main>
  );
}

export default App;

