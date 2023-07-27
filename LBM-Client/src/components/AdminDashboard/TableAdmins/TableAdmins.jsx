import DataTable from 'react-data-table-component';   
import css from './TableAdmins.module.scss';

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
        name: 'Remove',
        selector: row => row.status,
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
        status: "remove"
    },
    {
        id: 2,
        user: 'Guillermo',
        mail: "guillermo@gmail.com",
        status: "remove"
    },
    // {
    //     id: 3,
    //     user: 'Allena',
    //     mail: "allena@gmail.com",
    //     status: "remove"
    // },

]

const Admins = () => {
    return (
        <div className={css.container}>
        <div className={css.table}>
        <h3>Admins</h3>
        <DataTable
            columns={columns}
            data={data}
            customStyles={customStyles}
            
        />
        </div>
        </div>


    );
};

export default Admins; 