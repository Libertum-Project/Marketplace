import css from "./BuyProperty.module.css";
import ProgressBar from "./ProgressBar";
import check from "./assets/check.svg"
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomConnectButtom from "../../SideBar/CustomConnectButtom";
import {
  setConnected,
  selectIsConnected,
} from "../../../../redux/features/walletSlice";
import HeaderProperty from "./Header";

const ConfirmTokens = ({ handleSubmit, onNext, 
  AvailablesNFT,  
  NFTPrice, 
  PRY,
  address,
  location,
  Square_foot,
  amenities,
  rooms
}) => {

    
    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };
    const [rangeValue, setRangeValue] = useState(10);


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

    const isConnected = useSelector(selectIsConnected);
    console.log("connected" + isConnected)
  
    return (
    <form className={css.createForm} onSubmit={handleFormSubmit}>
      <h2>Confirm Tokens and Property</h2>
      <ProgressBar step="1" />

      <HeaderProperty
            address={address}
            location={location}
            amenities={amenities}
            rooms={rooms}
            Square_foot={Square_foot}
          />

      <div className={css.createForm__inputs}>

      <div className={css.inputContainer}>        
        { (!isConnected) ?
         <span>                    
         <p>Please connect your wallet:</p>        
            <CustomConnectButtom />
        </span>
        :
        <div> 
          <span>
            Your Metamask wallet is already connected.
            <img src={check} alt="" />
          </span>        
        </div>
        }      
      </div>

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
