import React from "react";
import "./StakeLBMSuccess.scss";
import LBM from "../../assets/LBM-icon.svg";
import ok from "../../assets/Ok-tick.svg";
import { BsX } from "react-icons/bs";

function StakeLBMSuccess({ states, setStateModals }) {
  function changeState() {
    setStateModals(false);
  }

  return (
    <div className={states.lbmsuccess ? "lbmsuccess-modal" : "modals-off"}>
      <div className="modal">
        <div className="top-modal">
          <div onClick={changeState}>
            <BsX className="close" />
          </div>
          <img src={ok} alt="ok icon" />
        </div>
        <div className="mid-modal">
          <h3>Your stake was successful</h3>
          <div className="container">
            <h4>You successfully staked</h4>
            <div className="mobile">
              <img src={LBM} alt="LBM incon" />
              <h4>100 LBM</h4>
            </div>
          </div>
        </div>
        <button onClick={changeState}>Confirm</button>
      </div>
    </div>
  );
}

export default StakeLBMSuccess;
