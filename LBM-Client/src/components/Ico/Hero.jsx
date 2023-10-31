import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import exchangeIcon from './assets/exchangeIcon.svg';
import "./Hero.scss"

const Hero = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('lbm');

  const exchangeRates = {
    lbm: 0.06,
    usd: 1 / 0.06, 
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const calculatedValue = value * exchangeRates[selectedCurrency];
    const otherCurrency = selectedCurrency === 'lbm' ? 'usd' : 'lbm';
    document.getElementById(otherCurrency).value = calculatedValue.toFixed(2);
  };

  const handleExchangeClick = () => {
    const otherCurrency = selectedCurrency === 'lbm' ? 'usd' : 'lbm';
    setSelectedCurrency(otherCurrency);

    const inputValue = document.getElementById(selectedCurrency).value;
    const calculatedValue = inputValue * exchangeRates[otherCurrency];
    document.getElementById(otherCurrency).value = calculatedValue.toFixed(2);
  };

  return (

    <div className='first-container'>
        <div className='title'>
          <h2>Transforming an exclusive market into an Inclusive opportunity for Everyone!</h2>
          <h3>Get your $LBM Tokens now!</h3>
          <Slide direction={'left'} triggerOnce={true}>
            <section className='text'>
              <p>Don't miss out on your chance to be a part of the inclusive revolution in the real estate market. Start earning a steady rental income every month, hassle-free, and without any additional maintenance costs.</p>
              <p>By purchasing $LBM tokens, you are joining a movement that seeks to democratise and transform the landscape of fractionalised rental income investments. join us in creating a more inclusive world for all.</p>
            </section>
          </Slide>
        </div>
        <Slide direction={'down'} triggerOnce={false}>
          <div className='box'>
            <h4>Private Round - Price: $0.06</h4>
            <p className='first'>SOLD 2.345.534/12.500.000</p>
            <p className='second'>99% Disscount Community Sale ends soon</p>

            <div className='exchange-box'>
              <h3>Private Community Pre-Sale</h3>
              <p>1 $LBM = 0.06 USD</p>

              <div className='exchange-box-coins'>
                <div className='exchange-buttons'>
                  <input
                    type='text'
                    id={selectedCurrency}
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <p>{selectedCurrency.toUpperCase()}</p>
                </div>

                <img
                  className='exchangeIcon'
                  src={exchangeIcon}
                  alt=''
                  onClick={handleExchangeClick}
                />

                <div className='exchange-buttons'>
                  <input
                    type='text'
                    id={selectedCurrency === 'lbm' ? 'usd' : 'lbm'}
                    readOnly
                  />
                  <p>{selectedCurrency === 'lbm' ? 'USD' : 'LBM'}</p>
                </div>
              </div>

              <button className='connect-wallet'>Connect Wallet</button>
            </div>
          </div>
        </Slide>
      </div>

  );
};

export default Hero;
