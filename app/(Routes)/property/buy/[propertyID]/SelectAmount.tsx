import { type ReactElement } from "react";
import css from "./Buy.module.css";

export function SelectAmount({
  propertyDetails,
  currentStep,
  setCurrentStep,
}: any): ReactElement {
  const handleGoBack = () => {
    console.log("go back");
  };

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.tittle}>
          <div className={css.goBackBtn} onClick={handleGoBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="#2196F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1>Select Amount</h1>
        </div>
        <p>Select the amount of tokens to purchase</p>
        <div className={css.progressBar}>
          <div className={css.step + " " + css.selected}>
            <p>1</p>
          </div>
          <div className={css.divider}></div>
          <div className={css.step} onClick={handleNextStep}>
            <p>2</p>
          </div>
        </div>
      </header>
    </div>
  );
}
