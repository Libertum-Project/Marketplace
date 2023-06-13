import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import db from "../RealEstates/fakedb/db.json";

const BuyProperty = () => {
  const { number } = useParams();
  const land = db.find((item) => item.number === number);

  const [rangeValue, setRangeValue] = useState(40);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const priceNFT = parseInt(land.NFTPrice);
  const totalPrice = rangeValue * priceNFT;

  const availables = land.AvailablesNFT

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div >
          <h1 className="text-5xl font-bold mt-10">{land.address} | {land.location}</h1>
          {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}

          <div className='w-96 mt-5 ml-52'>

          <p className='text-left mb-2'>Property token quantity: </p>
          <input
            type="range"
            min="0"
            max={availables}
            value={rangeValue}
            className="range w-96"
            onChange={handleRangeChange}
          />
          <p>Buy <span className='font-extrabold'>{rangeValue}  </span> NFT  at  ${priceNFT} per NFT</p>
           
          {/* <p>Total Price: $ {totalPrice}</p>  */}


          <p className='mt-8 text-left mb-2'>Payment Method: </p>
          <select className="select select-primary w-full max-w-x" onChange={handlePaymentMethodChange}>
            <option value="metamask">Metamask</option>
            <option value="bank-transfer">Bank Transfer</option>
            <option value="other">Credit Card</option>
          </select>

          <p className='mt-8 text-left mb-2'>Payment Currency: </p>
          <select className="select select-primary w-full max-w-x" onChange={handlePaymentMethodChange}>
            <option value="metamask">USDC</option>            
            <option value="other">Other</option>
          </select>

          <p className=' mt-8 text-justify'>Platform fee: $0.0</p>
          <p className='text-left'>Processing fee: $0. 001 USDC</p>
          </div>

          <button className='uppercase text-2xl bg-primary rounded-full ml-52
           h-12 w-96 mt-4 flex items-center justify-center '>Buy: $ {totalPrice}</button>  

           {/* Agregar pop up que diga "congratulations, you just purchased this property property adrress" */}


        </div>
      </div>
    </div>
  );
};

export default BuyProperty;
