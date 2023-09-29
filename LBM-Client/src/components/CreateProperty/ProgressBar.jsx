import css from "./CreateProperty.module.css";

const ProgressBar = ({ step }) => {
  let width = null;
  if (step === "1") width = "25%";
  if (step === "2") width = "50%";
  if (step === "3") width = "75%";
  if (step === "4") width = "100%";

  return (
    <div className={css.progressBarContainer}>
      <p>
        <span>Step {step}</span> of 4
      </p>
      <div className={css.progressBar}>
        <div className={css.progressBar__bar} style={{ width: width }}></div>
        <div className={css.progressBar__bg}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
