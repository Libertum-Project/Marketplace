import DataTable from 'react-data-table-component';   
import css from './TableUsers.module.scss';

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
        name: 'Property ID',
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
        name: 'Claim Earnings',
        selector: row => row.claim,
        cell: row => (
            <div
              style={{
                backgroundColor: 'gray', //color de fondo 
                borderRadius: '4px', //borde redondeado
                color: 'white', // color del texto 
                padding: '8px', //espaciado interno 
                
              }}
            >
              {row.claim}
            </div>
    
           ) }]

const data = [
    {
        id: 1,
        propertyID:"#489",
        address: "21 st.",
        tokens: 25,
        tokenprice: "$50",
        return: "$45",
        claim: "CLAIM",

    },
    {
        id: 2,
        propertyID:"#8549",
        address: "21 st.",
        tokens: 25,
        tokenprice: "$50",
        return: "$32",
        claim: "CLAIM",
        
    },
    
]

const Users = () => {
    return (
        <div className={css.container}>
        <div className={css.table}>
        <h3></h3>
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            
        />
        </div>
        </div>


    );
};

export default Users; 