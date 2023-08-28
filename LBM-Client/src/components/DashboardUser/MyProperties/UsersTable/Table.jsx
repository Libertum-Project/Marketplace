import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import DataTable from 'react-data-table-component';   
import css from './TableUsers.module.scss';
import { Link } from 'react-router-dom';
import { withdrawFunds } from '../../../../../redux/features/propertySlice';

 

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
        name: "Property Type",
        selector: row => row.type
    },
    {
        name: "Available Tokens",
        selector: row => row.tokensavailable
    },
    // {
    //     name: "Tokens sold",
    //     selector: row => row.tokenssold
    // },
    {
        name: "Property Value",
        selector: row => row.value
    },

    {
        name: "Status",
        selector: row => row.propertystatus
    },
    {
        name: 'Transaction History',
        selector: row => row.history,
        cell: row => (
            <Link to="/comingsoon">
                <button
                style={{
                    backgroundColor: "gray", //color de fondo
                    borderRadius: "5px", //borde redondeado
                    color: "white", // color del texto
                    padding: "8px", //espaciado interno            
                  }}
                  >
                {row.history}
                </button>
            </Link>
           ) 
    },
    {
        name: "Withdraw",
        selector: row => row.withdrawFunds,
        cell: row => (
            <Link to={`http:/localhost:3001/${row.propertyID}`}>
        <button
          style={{
            backgroundColor: "gray", //color de fondo
            borderRadius: "5px", //borde redondeado
            color: "white", // color del texto
            padding: "8px", //espaciado interno            
          }}
        >
          {row.withdrawFunds}
        </button>
      </Link>
        )
    },
]


const Properties = ({transactions, publishedProperties}) => {   

    
    const dispatch = useDispatch();
    const claimError = useSelector((state) =>state.property.error)
    const [error, setError] = useState(claimError);

    const handleClickWithdraw = (event, address, type) => {

        const propertyType = type;
        const propertyAddress = address;

    event.preventDefault();
    dispatch(
        withdrawFunds({propertyAddress, propertyType})
        .then(()=>{
        console.log(error)
        })
    )
    }


    const properties = publishedProperties.map((property) => ({
        id: property.ID_Property,
        propertyID: property.ID_Property,
        address: property.Feature.Address,
        type: property.Feature.Type,
        tokensavailable: property.Financial.Number_of_tokens_available,
        // tokenssold: publishedProperties,        
        value: property.Financial.Market_value_of_the_property,
        propertystatus: property.Feature.Occupancy_Status,
        history: "History",
        withdrawFunds: (
            <button
                onClick={(event)=>
                handleClickWithdraw(
                    event,
                    property.Feature.Address,
                    property.Feature,Type
                )}
            >
                Withdraw
            </button>
        )


      }));

    return (
        <div className={css.container}>
        <div className={css.table}>
        <h3>My Properties</h3>
        <DataTable
            columns={columns}     
             data={properties}
        />
        {error && (
                <p className={css.error}>
                  {error === "Claim error"
                    ? "You cannot claim your earnings yet. You must wait at least 30 days."
                    : "An error occurred. Please try again later."}
                </p>
              )}
        </div>
        </div>


    );
};

export default Properties; 
