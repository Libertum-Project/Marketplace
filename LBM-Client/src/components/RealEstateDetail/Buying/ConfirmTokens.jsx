import css from "./BuyProperty.module.css";
import ProgressBar from "../../CreateProperty/ProgressBar";
import Icons from "./Icons";
import { useState } from "react";


const ConfirmTokens = ({ handleSubmit, onNext, 

  address, 
  location,  
  AvailablesNFT,  
  NFTPrice, 
  PRY

}) => {

    
    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };
    const [rangeValue, setRangeValue] = useState(40);


    const handleFormSubmit = (event) => {
      event.preventDefault();
      const data = {
        rangeValue: rangeValue,
      };
      handleSubmit(data);

      console.log("Form submitted!");
      console.log("Form data:", formData);
      onNext()
    };

    
    
    
    return (
    <form className={css.createForm} onSubmit={handleFormSubmit}>
      <h2>Confirm Tokens and Property</h2>
      <ProgressBar step="1" />

      <h1> 
         {address} | {location}             
      </h1>          
      <Icons /> 

      <div className={css.createForm__inputs}>

        <div className={css.inputContainer}>
          <div>
            <label>Confirm property token quantity:</label>
            <input
              type="number"
              min="0"
              max={AvailablesNFT}
              value={rangeValue}             
              onChange={handleRangeChange}
            />
            <p>
              <span> <b>{rangeValue} </b></span> NFT at <b>$
              {NFTPrice}</b> per Token
            </p>
            <p> <b>Rental Yield:</b> {PRY} %</p>
          </div>
        </div>

        <div className={css.inputContainer}>
          <div className={css.subtotal}>
            <h2> <b> SUBTOTAL:</b> $  {rangeValue * NFTPrice}</h2>
          
          </div>
        </div>


      </div>

      <button className={css.nextBtn}  onClick={(event) => {
          handleFormSubmit(event);
        }} type="submit">
        Next
      </button>
    </form>
  );
};

export default ConfirmTokens;
