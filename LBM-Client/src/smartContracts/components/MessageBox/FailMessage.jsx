import css from "./MessageBox.module.css";
import error from '../../../../public/icons/alertIcon.svg'

const FailMessage = ({ setShowFailMessage }) => {
  const handleContinue = (event) => {
    event.preventDefault();
    setShowFailMessage(false);
  };
  return (
    <div
      className={css.errorBoxContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div className={css.errorBox}>
        <div className={css.header}>
          <img src={error} alt="error" />
          <h2>Error!</h2>
        </div>
        <div>
          <p>
            Thank you for your request. We are unable to continue the process.
            Please try again to complete the request.
          </p>
        </div>
        <button
          onClick={(event) => {
            handleContinue(event);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default FailMessage;
