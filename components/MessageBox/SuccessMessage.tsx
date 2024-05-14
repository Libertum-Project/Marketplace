import Link from 'next/link';
import Image from 'next/image';

import css from './MessageBox.module.css';
import success from './checkIcon.svg';

const SuccessMessage = ({ setShowSuccessMessage, message, textBtn }: any) => {
  const handleContinue = (event: any) => {
    event.preventDefault();
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
          <Image src={success} alt="success" />
          <h2>Success!</h2>
        </div>
        <div>
          <p>{message}</p>
        </div>
        <Link className={css.continueBtn} href="/investments">
          {textBtn}
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
