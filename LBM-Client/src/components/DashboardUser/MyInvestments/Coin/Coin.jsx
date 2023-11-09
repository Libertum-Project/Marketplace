import css from "./Coin.module.scss"; 
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Tokens purchased",
    selector: (row) => row.tokens,
  },
  {
    name: "Price per token",
    selector: (row) => row.tokenprice,
  },
  {
    name: "Payment Method",
    selector: (row) => row.paymentMethod,
  },
  {
    name: "Purchase date",
    selector: (row) => row.datepurchase,
  },
  {
    name: "Claim Earnings",
    selector: (row) => row.claim,
    cell: (row) => <button>{row.claim}</button>,
  },
];

const Coin = () => {
  const data = [0,];
  const tokensPurchased = 21;
  const whitelistAllocation = 150;

  return (
    <div className={css.container}>
          <div>
      {tokensPurchased === 0 ? (
        whitelistAllocation !== 0 ? (
          <div className={css.buytokensButton}>
            <h5>Congratulations! You are in the whitelist for the Libertum pre-sale. Don't miss this opportunity!</h5>
            <div className={css.buytokensbuttonSection}>
              <p>You can buy up to {whitelistAllocation} tokens!</p>
              <button>BUY TOKENS</button>
            </div>
          </div>
        ) : (
          <div className={css.buytokensButton}>
            <h5>Don't miss this opportunity! Buy tokens now.</h5>
            <button>BUY TOKENS</button>
          </div>
        )
      ) : (
        <div>        
          <div className={css.tokens}>
            <h3>{tokensPurchased}</h3>
            <h2>tokens purchased</h2>
          </div>
          <div className={css.buytokensButton}>

            <button>BUY MORE</button>
          </div>
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