import css from './MessageBox.module.css';
import success from '../../../../public/icons/checkIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SuccessMessage = ({
  setShowSuccessMessage,
  messagge,
  textBtn,
  redirectURL,
}) => {
  const navigate = useNavigate();
  const handleContinue = (event) => {
    event.preventDefault();
    navigate(redirectURL);
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
          <p>{messagge}</p>
        </div>
        <button
          onClick={(event) => {
            handleContinue(event);
          }}
        >
          {textBtn}
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
