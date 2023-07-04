import css from "./BuyProperty.module.css";
import ProgressBar from "../CreateProperty/ProgressBar";
import backBtn from "../../assets/back_btn.svg";
import { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../RealEstates/fakedb/db.json";

const PaymentMethod = ({ handleSubmit, onNext, onBack }) => {
  const { number } = useParams();
  const land = db.find((item) => item.number === number);

  const [showCreditCardModal, setShowCreditCardModal] = useState(false);
  const [showBankTransferModal, setShowBankTransferModal] = useState(false);
  const [showMetamaskModal, setShowMetamaskModal] = useState(false);

  const [creditCardData, setCreditCardData] = useState({
    cardNumber: "",
    cardName: "",
    // Otros campos de datos de tarjeta de crédito
  });

  const [bankTransferData, setBankTransferData] = useState({
    // Campos de datos de transferencia bancaria
  });

  const [metamaskData, setMetamaskData] = useState({
    // Campos de datos de Metamask
  });

  const handleCreditCardSelection = () => {
    setShowCreditCardModal(true);
    setShowBankTransferModal(false);
    setShowMetamaskModal(false);
  };

  const handleBankTransferSelection = () => {
    setShowCreditCardModal(false);
    setShowBankTransferModal(true);
    setShowMetamaskModal(false);
  };

  const handleMetamaskSelection = () => {
    setShowCreditCardModal(false);
    setShowBankTransferModal(false);
    setShowMetamaskModal(true);
  };

  const handleCreditCardInputChange = (event) => {
    const { name, value } = event.target;
    setCreditCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBankTransferInputChange = (event) => {
    const { name, value } = event.target;
    setBankTransferData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMetamaskInputChange = (event) => {
    const { name, value } = event.target;
    setMetamaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
              <label>
                <h1>
                  {land.address} | {land.location}
                </h1>
              </label>
            </div>
          </div>

          <div className={css.inputContainer}>
            <div>
              <h1>ICONOS</h1>
            </div>
          </div>

          <div className={css.inputContainer}>
            <div>
              <label>Payment Method</label>
              <select defaultValue="selected">
                <option value="selected" disabled>
                  Select
                </option>
                <option value="Metamask" onClick={handleMetamaskSelection}>
                  Metamask
                </option>
                <option value="Banktransfer" onClick={handleBankTransferSelection}>
                  Bank Transfer
                </option>
                <option value="CreditCard" onClick={handleCreditCardSelection}>
                  Credit Card
                </option>
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
                <option value="USDT">USDT</option>
              </select>
            </div>
          </div>
        </div>

        {showCreditCardModal && (
          <div className={css.modal}>
            <input
              type="text"
              name="cardNumber"
              value={creditCardData.cardNumber}
              onChange={handleCreditCardInputChange}
              placeholder="Card Number"
            />
          </div>
        )}

        {showBankTransferModal && (
          <div className={css.modal}>
            <input
              type="text"
              name="cardNumber"
              value={bankTransferData.cardNumber}
              onChange={handleBankTransferInputChange}
              placeholder="Card Number"
            />
          </div>
        )}

        {showMetamaskModal && (
          <div className={css.modal}>
            <input
              type="text"
              name="cardNumber"
              value={metamaskData.cardNumber}
              onChange={handleMetamaskInputChange}
              placeholder="Card Number"
            />
          </div>
        )}

        <button className={css.nextBtn} onClick={onNext}>
          Next
        </button>
      </form>
    </>
  );
};

export default PaymentMethod;
