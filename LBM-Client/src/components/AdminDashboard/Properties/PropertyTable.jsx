
  import DataTable from 'react-data-table-component';
  import css from './PropertyTable.module.scss';
  import { useEffect } from "react";
  import { useDispatch, useSelector } from 'react-redux';
  import {
    fetchAllProperties,
    setPropertyStatus,
} from "../../../../redux/features/propertySlice"

  
  const PropertyTable = () => {

    const dispatch = useDispatch();
    const allProperties = useSelector((state) => state.property.allProperies);

    useEffect(() => {
      console.log("Fetching all properties in Properties component...");
      dispatch(fetchAllProperties());
    }, [dispatch]);

      const handleActive = async (propertyId, isActive) => {
        await dispatch(setPropertyStatus({ propertyId, isActive }));
        dispatch(fetchAllProperties());
      };

      const handlePause = async (propertyId, isActive) => {
        await dispatch(setPropertyStatus({ propertyId, isActive }));
        dispatch(fetchAllProperties());
      };
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
                when: row => row.action === 'Activate',
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
        selector: row => row.ID_Property
      },
      {
        name: 'Address',
        selector: row => row.Feature.Address,
        sortable: true,
      },
      {
        name: 'Investment Type',
        selector: row => row.Financial.Investment_type,
        sortable: true,
      },
      {
        name: 'Monthly Payment',
        cell: row => (
          <div>
            {row.IsActive ? 'Active' : 'Paused'}
          </div>
        ),
        sortable: true,
      },
      {
        name: 'Action',
        cell: row => (
          <div>
            {row.IsActive ? (
              <button
                style={{ backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 10px' }}
                onClick={() => handlePause(row.ID_Property, false)}
              >
                Pause
              </button>
            ) : (
              <button
                style={{ backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '3px', padding: '3px 10px' }}
                onClick={() => handleActive(row.ID_Property, true)}
              >
                Activate
              </button>
            )}
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      }
      
    ];
  
    const mappedProperties = allProperties.map((property) => ({
      Feature: {
        Address: property.Feature.Address,
      },
      Financial: {
        Investment_type: property.Financial.Investment_type,
      },
      IsActive: property.IsActive,
      ID_Property: property.ID_Property,
    }));
  
    return (
      <div className={css.container}>
        <div className={css.table}>
          <h3>Properties</h3>
          <DataTable
            columns={columns}
            data={mappedProperties}
            customStyles={customStyles}
          />
        </div>
      </div>
    );
  };
  
  export default PropertyTable;
  