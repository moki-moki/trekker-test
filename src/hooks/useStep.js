import { useState } from "react";

export default function useStep(steps) {
  const [step, setStep] = useState(0);

  const changeStep = () => {
    setStep((prev) => {
      if (prev >= steps.length - 1) return prev - 1;
      return prev + 1;
    });
  };

  return { currentStep: steps[step],
    changeStep,
    step };
}

