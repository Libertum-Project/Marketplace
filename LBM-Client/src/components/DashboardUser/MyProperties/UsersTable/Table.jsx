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
        name: 'ID',
        selector: row => row.propertyID,
    },
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
    {
        name: "Claimable From",
        selector: row => row.dateclaming
    },
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

const data = [
    {
        id: 1,
        propertyID:"#489",
        address: "21 st.",
        tokens: 25,
        tokenprice: "$50",
        return: "$45",
        datepurchase:"12/07/23",
        dateclaming:"12/08/23",         
        claim: "CLAIM",

    },
    {
        id: 2,
        propertyID:"#489",
        address: "21 st.",
        tokens: 25,
        tokenprice: "$50",
        return: "$45",
        datepurchase:"05/07/23",
        dateclaming:"05/08/23",         
        claim: "CLAIM",
        
    },
    
]

const Properties = ({transactions}) => {

    // ⚠️ DESCOMENTAR ESTO PARA QUE SE MUESTRE LAS TRANSACCIONES QUE SE REALIZARON, LAS PROPIEDDADES. 
    // const transactionData = transactions.map((transaction) => ({
    //     id: transaction.Transaction_ID,
    //     propertyID: `#${transaction.property.ID_Property}`,
    //     address: transaction.property.address,
    //     tokens: transaction.Token_quantity,
    //     tokenprice: `$${transaction.Price}`,
    //     return: `$${transaction.Return_of_Investment}`,
    //     datepurchase: transaction.Transaction_Date,
    //     dateclaming: transaction.Claimable_From,
    //     claim: transaction.Claim,
    //   }));

    return (
        <div className={css.container}>
        <div className={css.table}>
        <h3>My Investments</h3>
        <DataTable
            columns={columns}
            data={data}
             // ⚠️ DESCOMENTAR ESTO ⬇️  Y COMENTAR 'DATA'⬆️ ARRIBA PARA QUE MUESRE LOS DATOS REALES DE LAS PROPIEDADES EN LAS Q SE INVIRTIÓ
            //  data={transactionData}

            
            
        />
        </div>
        </div>


    );
};

export default Properties; 