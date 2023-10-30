import { useState, useEffect } from 'react';
import './PLBM_example.css';
import { getCurrentSaleStage } from './getCurrentSaleStage';
import { getRemainingTokens } from './getRemainingTokens';

function PLBM_example() {
  const [currentStage, setCurrentStage] = useState(null);
  const [remainingTokens, setRemainingTokens] = useState({
    seedTokensRemaining: null,
    whitelistTokensRemaining: null,
    publicTokensRemaining: null,
  });

  useEffect(() => {
    async function fetchData() {
      // Fetch the current stage
      const stage = await getCurrentSaleStage();
      setCurrentStage(stage);

      // Fetch the remaining tokens
      const tokens = await getRemainingTokens();
      setRemainingTokens(tokens);
    }

    fetchData();
  }, []);

  return (
    <div className="PLBM">
      <h1>Current Token Sale Stage:</h1>
      {currentStage !== null ? <p>{currentStage}</p> : <p>Loading...</p>}

      <h2>Remaining Tokens:</h2>
      {remainingTokens.seedTokensRemaining !== null ? (
        <p>Seed Round: {remainingTokens.seedTokensRemaining} pLBM</p>
      ) : (
        <p>Loading...</p>
      )}
      {remainingTokens.whitelistTokensRemaining !== null ? (
        <p>Whitelist Round: {remainingTokens.whitelistTokensRemaining} pLBM</p>
      ) : (
        <p>Loading...</p>
      )}
      {remainingTokens.publicTokensRemaining !== null ? (
        <p>Public Round: {remainingTokens.publicTokensRemaining} pLBM</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PLBM_example;
