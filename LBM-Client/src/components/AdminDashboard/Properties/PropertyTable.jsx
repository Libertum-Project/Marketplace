import DataTable from 'react-data-table-component';   
import css from './PropertyTable.module.scss';

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
        name: 'Owner',
        selector: row => row.owner,
        
        
    },
    {
        name: 'Property address',
        selector: row => row.address,
    },
    {
        name: "Movement Type",
        selector: row => row.movement
    },
    {
        name: "Price",
        selector: row => row.price
    },
    
    {
        name: 'Detail',
        selector: row => row.detail,
        cell: row => (
            <div
              style={{
                backgroundColor: 'gray', // Cambia el color de fondo deseado
                borderRadius: '4px', // Añade el borde redondeado
                color: 'white', // Cambia el color del texto deseado
                padding: '8px', // Ajusta el espaciado interno según sea necesario

              }}
            >
              {row.detail}
            </div>
    
           ) },
           {
            name: 'View Users',
            selector: row => row.contracts,
            cell: row => (
                <div
                  style={{
                    backgroundColor: 'gray', // Cambia el color de fondo deseado
                    borderRadius: '4px', // Añade el borde redondeado
                    color: 'white', // Cambia el color del texto deseado
                    padding: '8px', // Ajusta el espaciado interno según sea necesario
    
                  }}
                >
                  {row.contracts}
                </div>
        
               ) },

        
        ]

const data = [
    {
        id: 1,
        owner: 'Alan',
        address: "23st 1842, London, UK",
        movement: "sell",
        price: "$58987",
        detail: "details",
        contracts: "view users"
    },
    {
        id: 1,
        owner: 'Alan',
        address: "23st 1842, London, UK",
        movement: "sell",
        price: "$58987",
        detail: "details",
        contracts: "view users"
    },
    {
        id: 1,
        owner: 'Alan',
        address: "23st 1842, London, UK",
        movement: "sell",
        price: "$58987",
        detail: "details",
        contracts: "view users"
    },
    {
        id: 1,
        owner: 'Alan',
        address: "23st 1842, London, UK",
        movement: "sell",
        price: "$58987",
        detail: "details",
        contracts: "view users"
    },
    {
        id: 1,
        owner: 'Alan',
        address: "23st 1842, London, UK",
        movement: "sell",
        price: "$58987",
        detail: "details",
        contracts: "view users"
    },
    {
        id: 1,
        owner: 'Alan',
        address: "23st 1842, London, UK",
        movement: "sell",
        price: "$58987",
        detail: "details",
        contracts: "view users"
    },
    {
        id: 1,
        owner: 'Alan',
        address: "23st 1842, London, UK",
        movement: "sell",
        price: "$58987",
        detail: "details",
        contracts: "view users"
    },
    
]

const PropertyTable = () => {
    return (
        <div className={css.container}>
        <div className={css.table}>
        <h3>Properties</h3>
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            
        />
        </div>
        </div>


    );
};

export default PropertyTable; 