import Image from 'next/image';

import USDT from '@/public/assets/USDT.png';

import css from './MessageBox.module.css';

const NotEnoughUSDT = ({ setShowNotEnoughUSDT }: any) => {
  const handleContinue = (event: any) => {
    event.preventDefault();
    setShowNotEnoughUSDT(false);
  };

  const handleErrorBoxClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <div
      className={css.notEnoughContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div className={css.notEnough} onClick={handleErrorBoxClick}>
        <div className={css.header}>
          <Image src={USDT} alt="error" width={32} height={32} />
          <h2>Insufficient Balance</h2>
        </div>
        <div>
          <p>You do not have enough USDT to complete this transaction.</p>
        </div>
        <div className={css.URL}>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x55d398326f99059fF775485246999027B3197955"
            rel="noopener noreferrer"
            target="_blank"
          >
            Click here to buy some USDT
          </a>
        </div>
        <button
          onClick={(event) => {
            handleContinue(event);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default NotEnoughUSDT;
