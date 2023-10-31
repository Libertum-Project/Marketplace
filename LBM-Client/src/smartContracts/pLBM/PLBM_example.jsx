import { useState, useEffect } from 'react';
import  css from './PLBM_example.module.css';
import { getCurrentSaleStage } from './getCurrentSaleStage';
import { getRemainingTokens } from './getRemainingTokens';
import { getUserWhitelistAllocation } from './getUserWhitelistAllocation';

function PLBM_example() {
  const [currentStage, setCurrentStage] = useState(null);
  const [remainingTokens, setRemainingTokens] = useState({
    seedTokensRemaining: null,
    whitelistTokensRemaining: null,
    publicTokensRemaining: null,
  });
  const [userWhitelistAllocation, setUserWhitelistAllocation] = useState(null);

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
     const whitelistAllocation = await getUserWhitelistAllocation(
        '0xA74fCD902beB43b29cfc7c5c9Ff33Aea6FF05424'
      );
      setUserWhitelistAllocation(whitelistAllocation);
  }

  return (
    <div className={css.PLBM}>
      <div>
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

      <div>
        <button onClick={handleGetUserWhitelistAllocation}>Whitelist Allocation:</button>
        {userWhitelistAllocation !== null ? (
          <p>{userWhitelistAllocation}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default PLBM_example;
