import DataTable from 'react-data-table-component';   
import css from './TableUsers.module.scss';
import { Link } from 'react-router-dom';

const customStyles = {
    headRow: {
      style: {
        color: 'var(--0-c-0507, #0C0507)',
        fontFamily: 'Inter',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'capitalize',
        with: 'fit-content',
        whiteSpace: 'normal', // Permite que el contenido de la fila de encabezado se ajuste en múltiples líneas
        lineHeight: '1.2', // Altura de línea para mejorar la legibilidad
      }
    },
    conditionalCellStyles: [
        {
          when: row => row.selector === 'claim',
          style: {
            borderRadius: '4px',
            backgroundColor: 'blue', // Aquí puedes cambiar el color de fondo deseado
            color: 'white', // Aquí puedes cambiar el color del texto deseado
          }
        }
      ]
  };
  

const columns = [
    {
        name: 'Address',
        selector: row => row.address,
    },
    {
        name: "Tokens purchased",
        selector: row => row.tokens
    },
    {
        name: "Price for token",
        selector: row => row.tokenprice
    },
    {
        name: "Return of Investment",
        selector: row => row.return
    },
    {
        name: "Purchase date",
        selector: row => row.datepurchase
    },
    // {
    //     name: "Claimable From",
    //     selector: row => row.dateclaming
    // },
    {
        name: 'Claim Earnings',
        selector: row => row.claim,
        cell: row => (
            <Link to={`http:/localhost:3001/${row.propertyID}`}>
                <button
                style={{
                    backgroundColor: 'gray', //color de fondo 
                    borderRadius: '4px', //borde redondeado
                    color: 'white', // color del texto 
                    padding: '8px', //espaciado interno 
                    
                }}
                >
                {row.claim}
                </button>
            </Link>
           ) }]


const Investments = ({ investments, transactions }) => {

    //❗⬇️ ACA ESTA EL BOTON QUE MANDA LA INFO!!!⬇ 
    const handleClaimClick = (addressID, tokens, type) => {
        console.log('Address ID:', addressID);
        console.log('Tokens:', tokens);
        console.log('Type:', type);
      };
      
    const combinedData = investments.map((investment, index) => {
        const currentDate = new Date();
        
        const purchaseDate = new Date(transactions[index].createdAt);
        
        const claimableDate = new Date(purchaseDate);
        claimableDate.setDate(claimableDate.getDate() + 30);
        
        const formattedPurchaseDate =
          ('0' + (purchaseDate.getMonth() + 1)).slice(-2) +
          '/' +
          ('0' + purchaseDate.getDate()).slice(-2) +
          '/' +
          purchaseDate
            .getFullYear()
            .toString()
            .slice(-2);
      
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
              disabled={currentDate < claimableDate}
              onClick={() =>
                handleClaimClick(
                  investment.addressID,
                  transactions[index].Token_quantity,
                  investment.Feature.Type
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
        </div>
      </div>
    );
  };
  
  export default Investments;