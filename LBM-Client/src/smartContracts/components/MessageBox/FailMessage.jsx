import css from './MessageBox.module.css';
import error from '../../../../public/icons/alertIcon.svg';

const FailMessage = ({ setShowFailMessage, message, url }) => {
  const handleContinue = (event) => {
    event.preventDefault();
    setShowFailMessage(false);
  };

  const handleErrorBoxClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={css.errorBoxContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div className={css.errorBox} onClick={handleErrorBoxClick}>
        <div className={css.header}>
          <img src={error} alt="error" />
          <h2>Error!</h2>
        </div>
        <div>
          <p>{message}</p>
        </div>
        {url && (
          <div className={css.polyScanURL}>
            <a href={url} target="_blank">
              Click here to view Transaction on Block explorer
            </a>
          </div>
        )}
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
