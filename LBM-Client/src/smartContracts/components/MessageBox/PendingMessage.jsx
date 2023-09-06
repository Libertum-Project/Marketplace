import css from "./MessageBox.module.css";
import pending from "../../../assets/wait.gif";

const PendingMessage = () => {
  return (
    <div className={css.pendingBoxContainer}>
      <div className={css.pendingBox}>
        <div className={css.header}>
          <img src={pending} alt="pending" />
          <h2>Processing your investment...</h2>
        </div>
        <div>
          <p>Please wait.</p>
        </div>
      </div>
    </div>
  );
};

export default PendingMessage;
