import { useState, useEffect } from 'react';
import css from './PLBM_example.module.css';
import { getCurrentSaleStage } from './getCurrentSaleStage';
import { getRemainingTokens } from './getRemainingTokens';
import { getUserWhitelistAllocation } from './getUserWhitelistAllocation';
import { getUserBalance } from './getUserBalance';

function PLBM_example() {
  const [currentStage, setCurrentStage] = useState(null);
  const [remainingTokens, setRemainingTokens] = useState({
    seedTokensRemaining: null,
    whitelistTokensRemaining: null,
    publicTokensRemaining: null,
  });
  const [userWhitelistAllocation, setUserWhitelistAllocation] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const stage = await getCurrentSaleStage();
      setCurrentStage(stage);

      const tokens = await getRemainingTokens();
      setRemainingTokens(tokens);
    }

    fetchData();
  }, []);

  const handleGetUserWhitelistAllocation = async () => {
    const whitelistAllocation = await getUserWhitelistAllocation();
    setUserWhitelistAllocation(whitelistAllocation);
  };

  const handleGetUserBalance = async () => {
    const balance = await getUserBalance();
    setUserBalance(balance);
  };

  return (
    <div className={css.PLBM}>
      <div className={css.currentStage}>
        <h2>Current Token Sale Stage:</h2>
        {currentStage !== null ? <p>{currentStage}</p> : <p>Loading...</p>}
      </div>

      <div>
        <h2>Remaining Tokens:</h2>
        {remainingTokens.seedTokensRemaining !== null ? (
          <p>Seed Round: {remainingTokens.seedTokensRemaining} pLBM</p>
        ) : (
          <p>Loading...</p>
        )}
        {remainingTokens.whitelistTokensRemaining !== null ? (
          <p>
            Whitelist Round: {remainingTokens.whitelistTokensRemaining} pLBM
          </p>
        ) : (
          <p>Loading...</p>
        )}
        {remainingTokens.publicTokensRemaining !== null ? (
          <p>Public Round: {remainingTokens.publicTokensRemaining} pLBM</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className={css.whitelistAllocation}>
        <button onClick={handleGetUserWhitelistAllocation}>
          Get Whitelist Allocation
        </button>
        {userWhitelistAllocation !== null ? (
          <p>
            Your Current Whitelist Allocations is: {userWhitelistAllocation}
          </p>
        ) : null}
      </div>

      <div className={css.whitelistAllocation}>
        <button onClick={handleGetUserBalance}>Get Balance</button>
        {userBalance !== null ? (
          <p>Your Current Balance is: {userBalance}</p>
        ) : null}
      </div>
    </div>
  );
}

export default PLBM_example;
