import DataTable from "react-data-table-component";
import css from "./TableUsers.module.scss";
import { Link } from "react-router-dom";
import { claimMonthlyPayment } from "../../../../../redux/features/propertySlice";
import { useDispatch, useSelector } from "react-redux";
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
    cell: (row) => (
      <Link to={`http:/localhost:3001/${row.propertyID}`}>
        <button
          style={{
            backgroundColor: "gray", //color de fondo
            borderRadius: "px", //borde redondeado
            color: "white", // color del texto
            padding: "8px", //espaciado interno            
          }}
        >
          {row.claim}
        </button>
      </Link>
    ),
  },
];

const Investments = ({ investments, transactions }) => {
  const dispatch = useDispatch();
  const claimError = useSelector((state) => state.property.error);
  const [error, setError] = useState(claimError);
  //❗⬇️ ACA ESTA EL BOTON QUE MANDA LA INFO!!!⬇
  const handleClaimClick = (event, address, tokens, type) => {
    event.preventDefault();
    console.log("Address ID:", address);
    console.log("Tokens:", tokens);
    console.log("Type:", type);

    const propertyAddress = address;
    const quantity = tokens;
    const propertyType = type;

    dispatch(
      claimMonthlyPayment({ propertyAddress, quantity, propertyType })
    ).then(() => {
      console.log(error);
    });
  };

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

    return {
      idProperty: `#${investment.ID_Property}`,
      addressID: investment.Address,
      address: investment.Feature.Address,
      tokens: transactions[index].Token_quantity,
      tokenprice: `$${transactions[index].Price}`,
      return: `$${transactions[index].Return_of_Investment}`,
      datepurchase: formattedPurchaseDate,
      claim: (
        <button
          // disabled={currentDate < claimableDate}
          onClick={(event) =>
            handleClaimClick(
              event,
              investment.Address,
              transactions[index].Token_quantity,
              investment.Financial.Investment_type
            )
          }
        >
          Claim
        </button>
      ),
    };
  });

  return (
    <div className={css.container}>
      <div className={css.table}>
        <h3>My Investments</h3>
        <DataTable 
          columns={columns} 
          data={combinedData}           
        />

      {error && (
                <p className={css.error}>
                  {error === "Claim error"
                    ? "You cannot claim your earnings yet. You must wait at least 30 days."
                    : "An error occurred. Please try again later."}
                </p>
              )}

      </div>
    </div>
  );
};

export default Investments;
