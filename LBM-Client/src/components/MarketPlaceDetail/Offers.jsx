import DataTable from 'react-data-table-component';   
import css from './Offers.module.scss';

const customStyles = {
    headRow: {
      style: {
        color: 'var(--0-c-0507, #0C0507)',
        fontFamily: 'Inter',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'capitalize',
      
        backgroundColor: "#F9FAFB",
        borderColor: "#E5E7EB", 
        borderBottomWidth: '2px', 
        borderBottomStyle: 'solid',
      }
    },
    conditionalCellStyles: [
        {
          when: row => row.selector === 'status',
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
        name: 'Price',
        selector: row => row.price,
        
        
    },
    {
        name: 'USD Price',
        selector: row => row.USD,
    },
    {
        name: 'Diference',
        selector: row => row.difference,
    },
    {
        name: 'Expiration',
        selector: row => row.expiration,
    },
    {
        name: 'From',
        selector: row => row.from,
        // cell: row =>  
        // (
            // <div
            //   style={{
            //     backgroundColor: 'gray', // Cambia el color de fondo deseado
            //     borderRadius: '4px', // Añade el borde redondeado
            //     color: 'white', // Cambia el color del texto deseado
            //     padding: '8px' // Ajusta el espaciado interno según sea necesario
                
            //   }}
            // >
            //   {row.status}
            // </div>
    
        //    ) 
        }]

const data = [
    {
        id: 1,
        price: "$ 506.900",
        USD:  "$ 506.900",
        difference: " 12% below",
        expiration: "7 days",
        from: "8CDCC36",
    },
    {
        id: 2,
        price: "$ 506.900",
        USD:  "$ 506.900",
        difference: " 12% below",
        expiration: "7 days",
        from: "8CDCC36",
    },
    {
        id: 3,
        price: "$ 506.900",
        USD:  "$ 506.900",
        difference: " 12% below",
        expiration: "7 days",
        from: "8CDCC36",
    },
    {
        id: 4,
        price: "$ 506.900",
        USD:  "$ 506.900",
        difference: " 12% below",
        expiration: "7 days",
        from: "8CDCC36",
    }

]

const Offers = () => {
    return (
        <div className={css.container}>
        <div className={css.table}>
        <h3>Reports Of Your Properties</h3>
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            
        />
        </div>
        </div>


    );
};

export default Offers; 