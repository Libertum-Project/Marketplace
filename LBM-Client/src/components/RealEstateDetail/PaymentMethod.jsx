import css from "./BuyProperty.module.css";
import ProgressBar from "../CreateProperty/ProgressBar";
import backBtn from "../../assets/back_btn.svg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../RealEstates/fakedb/db.json";



const PaymentMethod = ({ handleSubmit, onNext, onBack }) => {
    const { number } = useParams();
    const land = db.find((item) => item.number === number);

//     useEffect(() => {
//     if (paymentMethod === "bank-transfer") {
//       window.my_modal_3.showModal();
//     }
//     if (paymentMethod === "credit-card") {
//       window.my_modal_4.showModal();
//     }
//     if (paymentMethod === "metamask") {
//       // Verificar si el método de pago es "Metamask" y no está conectado
//       window.my_modal_5.showModal();
//     }
//   }, [PaymentMethod]);

  return (
    <>
    <form className={css.createForm} onSubmit={handleSubmit}>

   <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Payment Method</h2>
      </div>
      <ProgressBar step={"2"} />

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
            <h1> ICONOS </h1>          
          </div>
        </div>


        <div className={css.inputContainer}>

          <div>
            <label>Payment Method</label>
            <select defaultValue="selected">
              <option value="selected" disabled>
                Select
              </option>
              <option value="Metamask">Metamask </option>
              <option value="Banktransfer">Bank Transfer</option>
              <option value="CreditCard">Credit Card</option>
             
            </select>
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Payment Currency</label>
       
            <select defaultValue="selected">
              <option value="selected" disabled>
                Select
              </option>
              <option value="USDT">USDT </option>
             
            </select>
          </div>
         
        </div>

      </div>

      <button className={css.nextBtn} onClick={onNext}>
        Next
      </button>
    </form>


    </>
  )};

  export default PaymentMethod; 

