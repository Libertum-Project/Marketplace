import css from "./MessageBox.module.css";
import success from "../../../../public/icons/checkIcon.svg"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SuccessMessage = ({ setShowSuccessMessage }) => {
  const navigate = useNavigate();
  const handleContinue = (event) => {
    event.preventDefault();
    navigate("/mydashboard");
    setShowSuccessMessage(false);
  };
  return (
    <div
      className={css.successBoxContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div className={css.successBox}>
        <div className={css.header}>
          <img src={success} alt="success" />
          <h2>Success!</h2>
        </div>
        <div>
          <p>
            Great news! You've successfully invested in this property. Your
            tokens are on the way!
          </p>
        </div>
        <button
          onClick={(event) => {
            handleContinue(event);
          }}
        >
          My Investments
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
