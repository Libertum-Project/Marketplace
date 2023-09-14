
import React from 'react';
import './InvestmentGuide.scss'; 

const InvestmentGuide = () => {
  return (
    <div className="process-container">
      <p>Ready to invest in real estate? Follow these simple steps and enjoy the benefits of passive income!</p>
      <div className="step">
        <div className="circle">1</div>
        <h2>Create your profile and complete ID verification</h2>
        <p>To begin, simply create your profile and fulfill the necessary Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements.</p>
      </div>
      <div className="connector"></div>
      <div className="step">
        <div className="circle">2</div>
        <h2>Browse and buy your dream property</h2>
        <p> Enjoy the exciting part of the process! Explore our Marketplace and choose your ideal property to invest in. Decide how many tokens you'd like to purchase, and proceed to checkout. You can pay with FIAT using your debit/credit card or through a bank transfer. Alternatively, you can connect your wallet to pay with cryptocurrencies.</p>
      </div>
      <div className="connector"></div>
      <div className="step">
        <div className="circle">3</div>
        <h2>Finalize the purchase agreement</h2>
        <p>After completing steps 1 and 2, it's time to sign the purchase smart contract at the checkout. This document legally binds all parties involved, linking the tokens to the property and rental income.</p>
      </div>
      <div className="connector"></div>
      <div className="step">
        <div className="circle">4</div>
        <h2>Start earning monthly rental income</h2>
        <p>Congratulations! With your tokens now in hand, you can begin receiving monthly rental income. This income will be deposited directly into your smart contract, allowing you to easily withdraw it at any time.</p>
      </div>
    </div>
  );
};

export default InvestmentGuide;
