import { type ReactElement } from "react";
import css from "./Buy.module.css";

export function ConfirmInvestment({
  propertyDetails,
  currentStep,
  setCurrentStep,
}: any): ReactElement {
  const handlePreviusStep = () => {
    setCurrentStep(1);
  };

  return (
    <div className={css.container}>
      <header className={css.header}>
        <div className={css.tittle}>
          <div className={css.goBackBtn} onClick={handlePreviusStep}>
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
          <h1>Confirm Investment</h1>
        </div>
        <p>Select the amount of tokens to purchase</p>
        <div className={css.progressBar}>
          <div className={css.step} onClick={handlePreviusStep}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.6673 7L9.50065 16.1667L5.33398 12"
                stroke="#47B2FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={css.divider}></div>
          <div className={css.step + " " + css.selected}>
            <p>2</p>
          </div>
        </div>
      </header>
    </div>
  );
}
