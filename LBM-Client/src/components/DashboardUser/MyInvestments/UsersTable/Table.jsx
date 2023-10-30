import DataTable from 'react-data-table-component';
import ClaimMonthlyPayment from '../../../../smartContracts/components/ClaimMonthlyPayment';
import css from './TableUsers.module.scss';

const columns = [
  {
    name: 'Address',
    selector: (row) => row.address,
  },
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
const Investments = ({ investments, transactions }) => {
  const combinedData = transactions.map((transaction, index) => {
    const currentDate = new Date();
    const purchaseDate = new Date(transaction.createdAt);
    const claimableDate = new Date(purchaseDate);
    claimableDate.setDate(claimableDate.getDate() + 30);
    const formattedPurchaseDate =
      ('0' + (purchaseDate.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + purchaseDate.getDate()).slice(-2) +
      '/' +
      purchaseDate.getFullYear().toString().slice(-2);

    const propertyId = transaction.ID_Property;
    const isActive = investments[propertyId - 1].IsActive;
    return {
      addressID: investments[propertyId - 1].Address,
      address: investments[propertyId - 1].Feature.Address,
      tokens: transaction.Token_quantity,
      tokenprice: `$${transaction.PricePerToken}`,
      paymentMethod: `${transaction.Payment_Method}`,
      datepurchase: formattedPurchaseDate,
      claim: (
        <div className={css.claim}>
          <ClaimMonthlyPayment
            propertyAddress={investments[propertyId - 1].Address}
            quantity={transaction.Token_quantity}
            propertyType={investments[propertyId - 1].Financial.Investment_type}
            isActive={isActive}
          />
          <div></div>
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
