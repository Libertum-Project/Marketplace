import DataTable from "react-data-table-component";
import ClaimMonthlyPayment from "../../../../smartContracts/components/ClaimMonthlyPayment";
import css from "./TableUsers.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const columns = [
  {
    name: "Address",
    selector: (row) => row.address,
  },
  {
    name: "Tokens purchased",
    selector: (row) => row.tokens,
  },
  {
    name: "Price for token",
    selector: (row) => row.tokenprice,
  },
  {
    name: "Return of Investment",
    selector: (row) => row.return,
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
const Investments = ({ investments, transactions }) => {
  const claimError = useSelector((state) => state.property.error);
  const [error, setError] = useState(claimError);

  const combinedData = investments.map((investment, index) => {
    const currentDate = new Date();
    const purchaseDate = new Date(transactions[index].createdAt);
    const claimableDate = new Date(purchaseDate);
    claimableDate.setDate(claimableDate.getDate() + 30);
    const formattedPurchaseDate =
      ("0" + (purchaseDate.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + purchaseDate.getDate()).slice(-2) +
      "/" +
      purchaseDate.getFullYear().toString().slice(-2);

    const canClaim = currentDate >= claimableDate;
    const errorMessage = canClaim
      ? null
      : "Must wait at least 30 days to claim your earnings";

    return {
      idProperty: `#${investment.ID_Property}`,
      addressID: investment.Address,
      address: investment.Feature.Address,
      tokens: transactions[index].Token_quantity,
      tokenprice: `$${transactions[index].Price}`,
      return: `$${transactions[index].Return_of_Investment}`,
      datepurchase: formattedPurchaseDate,
      claim: (
        <div className={css.claim}>
          <Link to={`http:/localhost:3001/${investment.ID_Property}`}>
            <ClaimMonthlyPayment
              propertyAddress={investment.Address}
              quantity={transactions[index].Token_quantity}
              propertyType={investment.Financial.Investment_type}
            />
          </Link>
          <div>
            {errorMessage && <p className={css.error}>{errorMessage}</p>}
          </div>
        </div>
      ),
    };
  });

  return (
    <div className={css.container}>
      <div className={css.table}>
        <h3>My Investments</h3>
        <DataTable columns={columns} data={combinedData} />
      </div>
    </div>
  );
};

export default Investments;
