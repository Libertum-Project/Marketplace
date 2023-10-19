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
  const data = [0,]
  return (
    <div className={css.container}>
      <div className={css.table}>
        <h3>My Investments</h3>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Coin; 