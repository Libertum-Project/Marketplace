import React, { useState } from 'react';
import css from './BuyProperty.module.css';
import ProgressBar from '../../CreateProperty/ProgressBar';
import backBtn from '../../../assets/back_btn.svg';
import Icons from './Icons';
import BankTransfer from './BankTransfer';
import CreditCard from './CreditCard';

const PaymentMethod = ({ handleSubmit, onNext, onBack, 

  address, 
  location, 
  
}) => {


  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState(''); 

  const [showModal, setShowModal] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');


  const handlePaymentMethod = (method) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!selectedMethod) {      
      setErrorMessage('Please select a payment method.');
      return;
    }
    if (!selectedCurrency) {      
      setErrorMessage('Please select a payment currency.');
      return;
    }
    const data = {
      method: selectedMethod,
      currency: selectedCurrency,
    };
    handleSubmit(data);
  };

  
  return (
    <>
      <form className={css.createForm} onSubmit={handleFormSubmit}>
        <div className={css.formHeader}>
          <button onClick={onBack}>
            <img src={backBtn} alt="Back" />
          </button>
          <h2>Payment Method</h2>
        </div>
        <ProgressBar step={'2'} />
        <h1>
          {address} | {location}
        </h1>
        <Icons />

        <div className={css.createForm__inputs}>
          <div className={css.inputContainer}>
            <div>
              <label>Payment Method</label>
              <select value={selectedMethod} onChange={(e) => handlePaymentMethod(e.target.value)}>
                <option value="" disabled>
                  Select
                </option>
                <option value="Metamask">Metamask</option>
                <option value="Banktransfer">Bank Transfer</option>
                <option value="CreditCard">Credit Card</option>
              </select>
              

            </div>
          </div>

          <div className={css.inputContainer}>
            <div>
              <label>Payment Currency</label>
              <select
                value={selectedCurrency} // Agrega esto para vincular el valor del estado
                onChange={(e) => setSelectedCurrency(e.target.value)} // Agrega esto para manejar el cambio de valor
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="USDT">USDT</option>
                {/* Agrega otras opciones de moneda aquí si es necesario */}
                

              </select>
            </div>
          </div>
          </div>

        {showModal && (
          <div className={css.modalContainer}>
            <div className={css.modalBackground} onClick={handleModalClose}></div>
            <div className={css.modalContent}>
              
              {/* Agrega el contenido específico para cada método de pago aquí */}
              {selectedMethod === 'Metamask' && (
                <div>
                  Your Metamask Wallet is already connected
                </div>
              )}
              {selectedMethod === 'Banktransfer' && (
                <div>
                  <BankTransfer />
                </div>
              )}
              {selectedMethod === 'CreditCard' && (
                <div>
                  <CreditCard />
                </div>
              )}
              <button className={css.buttonmodal} onClick={handleModalClose}>Continue</button>
            </div>
          </div>
        )}
        
        {errorMessage && <p className={css.errorMessage}>{errorMessage}</p>}
        <button className={css.nextBtn}  onClick={(event) => {
          handleFormSubmit(event);
        }} type="submit">
          Next
        </button>
      </form>
    </>
  );
};

export default PaymentMethod;
