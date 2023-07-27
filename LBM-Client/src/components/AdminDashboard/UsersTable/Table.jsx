import DataTable from 'react-data-table-component';   
import css from './TableUsers.module.scss';

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
        name: 'user',
        selector: row => row.user,
        
        
    },
    {
        name: 'Mail address',
        selector: row => row.mail,
    },
    {
        name: "",
        selector: row => row.empty
    },
    {
        name: "",
        selector: row => row.empty
    },
    
    {
        name: 'View contracts',
        selector: row => row.contract,
        cell: row => (
            <div
              style={{
                backgroundColor: 'gray', // Cambia el color de fondo deseado
                borderRadius: '4px', // Añade el borde redondeado
                color: 'white', // Cambia el color del texto deseado
                padding: '8px', // Ajusta el espaciado interno según sea necesario

              }}
            >
              {row.status}
            </div>
    
           ) }]

const data = [
    {
        id: 1,
        user: 'Alan',
        mail: "allena@gmail.com",
        status: "contract"
    },
    {
        id: 2,
        user: 'Guillermo',
        mail: "guillermo@gmail.com",
        status: "contract"
    },
    {
        id:3,
        user: 'Maria',
        mail: "guillermo@gmail.com",
        status: "contract"
    },
    {
        id: 4,
        user: 'Pedro',
        mail: "guillermo@gmail.com",
        status: "contract"
    },
    {
        id: 5,
        user: 'Laura',
        mail: "guillermo@gmail.com",
        status: "contract"
    },
    {
        id: 6,
        user: 'Paula',
        mail: "guillermo@gmail.com",
        status: "contract"
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