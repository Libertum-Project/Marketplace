import css from "./BuyProperty.module.css";
import ProgressBar from "../CreateProperty/ProgressBar";
import { useParams } from "react-router-dom"; 
import db from "../RealEstates/fakedb/db.json";
import { useState } from "react";
import backBtn from "../../assets/back_btn.svg";


const ConfirmInvestment = ({ handleSubmit, onBack }) => {
 
    
    const { number } = useParams();
    const land = db.find((item) => item.number === number);

    return (
    <>
    <form className={css.createForm} onSubmit={handleSubmit}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Financial information</h2>
      </div>
      <ProgressBar step={"3"} />

      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>
          <div>
            <label><h1>
             {land.address} | {land.location}
          </h1></label>          
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <h1> ICONS </h1>          
          </div>
        </div>

      </div>

      <div className={css.box}>
            <div>
                <label><b>Value of the Property:</b></label>
                <span>${land.price}</span>
            </div>
            <div>
                <label><b>Tokens to be Purchased:</b></label>
                <span>123</span>
            </div>
            <div>
                <label><b>Payment Method:</b></label>
                <span> Metamask</span>
            </div>
            <div>
                <label><b>Payment Currency:</b></label>
                <span>USTD</span>
            </div>
      </div>
      
          <div className={css.fees}>
            <p>Platform fee  $0. 00</p>  
            <p>Platform fee  $0. 00</p>  
          </div> 

        <div className={css.inputContainer}>
        <div className={css.subtotal}>
            <h2> <b> SUBTOTAL:</b> $  {}</h2>
          
          </div>
          </div>

      <button className={css.nextBtn}> Invest Now! </button>
    </form>
    </>
  )};

  export default ConfirmInvestment; 

