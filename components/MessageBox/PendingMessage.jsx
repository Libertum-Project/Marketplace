import css from "./MessageBox.module.css";
import Image from "next/image";
import pending from "./timeIcon.svg";

const PendingMessage = ({ messagge }) => {
  return (
    <div className={css.pendingBoxContainer}>
      <div className={css.pendingBox}>
        <div className={css.header}>
          <Image src={pending} alt="pending" width={48} height={48} />
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
