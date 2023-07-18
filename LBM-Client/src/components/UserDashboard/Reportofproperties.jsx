import DataTable from 'react-data-table-component';   
import css from './Reportofproperties.module.scss';

const customStyles = {
    headRow: {
      style: {
        color: 'var(--0-c-0507, #0C0507)',
        fontFamily: 'Inter',
        fontSize: '0.875rem',
        fontWeight: 700,
        textTransform: 'capitalize'
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
        name: 'Movement made by',
        selector: row => row.user,
        
        
    },
    {
        name: 'Property Name',
        selector: row => row.property,
    },
    {
        name: 'Movement type',
        selector: row => row.movement,
    },
    {
        name: 'Price',
        selector: row => row.price,
    },
    {
        name: 'Status',
        selector: row => row.status,
        cell: row => (
            <div
              style={{
                backgroundColor: 'gray', // Cambia el color de fondo deseado
                borderRadius: '4px', // Añade el borde redondeado
                color: 'white', // Cambia el color del texto deseado
                padding: '8px' // Ajusta el espaciado interno según sea necesario
                
              }}
            >
              {row.status}
            </div>
    
           ) }]

const data = [
    {
        id: 1,
        user: 'Allena',
        property: '1988',
        movement: "sale",
        price:"$32569",
        status: "paid"
    },
    {
        id: 2,
        user: 'Elston',
        property: '1988',
        movement: "rent",
        price:"$32569",
        status: "pending"
    },
    {
        id: 3,
        user: 'James',
        property: '1988',
        movement: "sale",
        price:"$32569",
        status: "canceled"
    },

]

const ReportofProperties = () => {
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

export default ReportofProperties; 