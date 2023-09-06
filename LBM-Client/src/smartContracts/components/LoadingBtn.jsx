import React from "react";
import css from "./smartcontracts.module.css";

const LoadingBtn = () => {
  return (
    <div className={css.loading}>
      <div className={css["three-body"]}>
        <div className={css["three-body__dot"]}></div>
        <div className={css["three-body__dot"]}></div>
        <div className={css["three-body__dot"]}></div>
      </div>
    </div>
  );
};

export default LoadingBtn;
