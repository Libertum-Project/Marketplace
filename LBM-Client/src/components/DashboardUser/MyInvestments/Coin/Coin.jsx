import { useEffect, useState } from 'react';
import { getUserWhitelistAllocation } from '../../../../smartContracts/pLBM/getUserWhitelistAllocation';
import { getUserBalance } from '../../../../smartContracts/pLBM/getUserBalance';
import css from './Coin.module.scss';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Tokens purchased',
    selector: (row) => row.tokens,
  },
  {
    name: 'Price per token',
    selector: (row) => row.tokenprice,
  },
  {
    name: 'Payment Method',
    selector: (row) => row.paymentMethod,
  },
  {
    name: 'Purchase date',
    selector: (row) => row.datepurchase,
  },
  {
    name: 'Claim Earnings',
    selector: (row) => row.claim,
    cell: (row) => <button>{row.claim}</button>,
  },
];

const Coin = () => {
  const data = [0];
  const [userBalance, setUserBalance] = useState(null);
  const [whitelistAllocation, setWhitelistAllocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const balance = await getUserBalance();
        setUserBalance(balance);

        const allocation = await getUserWhitelistAllocation();
        setWhitelistAllocation(allocation);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={css.container}>
      <div>
        {userBalance !== null && userBalance !== 0 ? (
          <div>
            <div className={css.tokens}>
              <h3>{userBalance}</h3>
              <h2>tokens purchased</h2>
            </div>
            <div className={css.buytokensButton}>
              <button>
                <a href="https://www.libertum.io/ico">BUY MORE</a>
              </button>
            </div>
          </div>
        ) : whitelistAllocation !== null && whitelistAllocation !== 0 ? (
          <div className={css.buytokensButton}>
            <h5>
              Congratulations! You are in the whitelist for the Libertum
              pre-sale. Don't miss this opportunity!
            </h5>
            <div className={css.buytokensbuttonSection}>
              <p>You can buy up to {whitelistAllocation} tokens!</p>
              <button>
                <a href="https://www.libertum.io/ico">BUY TOKENS</a>
              </button>
            </div>
          </div>
        ) : (
          <div className={css.buytokensButton}>
            <h5>Haven't purchased $LBM yet? Buy tokens now!</h5>
            <button>
              <a href="https://www.libertum.io/ico">BUY TOKENS</a>
            </button>
          </div>
        )}
      </div>

      <div className={css.table}>
        <h3>My Investments</h3>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Coin;
