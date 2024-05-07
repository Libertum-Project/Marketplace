import Image from 'next/image';

import css from './MessageBox.module.css';
import error from './alertIcon.svg';

const ErrorMessage = ({ setShowErrorMessage, message, url }: any) => {
  const handleContinue = (event: any) => {
    event.preventDefault();
    setShowErrorMessage(false);
  };

  const handleErrorBoxClick = (event: any) => {
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
          <Image src={error} alt="error" width={32} height={32} />
          <h2>Error</h2>
        </div>
        <div>
          <p>{message}</p>
        </div>
        {url && (
          <div className={css.URL}>
            <a href={url} target="_blank">
              Click here to view Transaction Details on Block explorer
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

export default ErrorMessage;
