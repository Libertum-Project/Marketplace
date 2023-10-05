import css from "./MessageBox.module.css";
import pending from "../.../../../../../public/icons/timeIcon.svg";

const PendingMessage = ({ messagge }) => {
  return (
    <div className={css.pendingBoxContainer}>
      <div className={css.pendingBox}>
        <div className={css.header}>
          <img src={pending} alt="pending" />
          <h2>{messagge}</h2>
        </div>
        <div>
          <p>Please wait.</p>
        </div>
      </div>
    </div>
  );
};

export default PendingMessage;
