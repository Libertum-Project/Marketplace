import './Investing.scss'
import earnIcon from './assets/earn.svg';
import loginIcon from './assets/login.svg';
import searchIcon from './assets/search.svg';
import agreementIcon from './assets/agreement.svg';

const Investing = () => {
  return(
    <div className='investingContainer'>
      <h2>INVESTMENT PROCESS</h2>
      <p>Investing in Libertum is simple, just follow this simple steps and start earning!</p>
    
      <div className='investingProcess'>
        <div className='circle'>
          <img src={loginIcon} alt="login Icon" />
        </div>
        <div className='text'>
          <h3 >Log In</h3>
          <p >Create your profile and complete ID verification: To begin, simply create your profile and fulfill the necessary Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements.</p>
        </div>
      </div>
    
      <div className='investingProcess'>
        <div className='circle'>
          <img src={searchIcon} alt="login Icon" />
        </div>
        <div className='text'>
          <h3>BROWSE YOUR DREAM PROPERTY</h3>
          <p >Enjoy the exciting part of the process! Explore our <a href="/marketplace">Marketplace</a> and choose your ideal property to invest in. Decide how many tokens you'd like to purchase, and proceed to checkout. Decide how many tokens you'd like to buy, then proceed to checkout. You can pay with FIAT using your debit/credit card or through a bank transfer. Alternatively, you can connect your wallet to pay with cryptocurrencies.</p>
        </div>
      </div>

      <div className='investingProcess'>
        <div className='circle'>
          <img src={agreementIcon} alt="login Icon" />
        </div>
        <div className='text'>
          <h3>FINALIZE THE PURCHASE AGREEMENT</h3>
          <p >After completing steps 1 and 2, it's time to sign the purchase smart contract at the checkout. This document legally binds all parties involved, linking the tokens to the property and rental income</p>
        </div>
      </div>

      <div className='investingProcess'>
        <div className='circle'>
          <img src={earnIcon} alt="login Icon" />
        </div>
        <div className='text'>
          <h3>Start earning monthly rental income:</h3>
          <p>Congratulations! With your tokens now in hand, you can begin receiving monthly rental income. This income will be deposited directly into your smart contract, allowing you to easily withdraw it at any time.</p>
        </div>
      </div>

      
    </div>

    )
}; 


export default Investing; 