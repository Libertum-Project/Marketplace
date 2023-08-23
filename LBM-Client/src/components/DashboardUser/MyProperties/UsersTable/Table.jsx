import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';   
import css from './TableUsers.module.scss';
import { Link } from 'react-router-dom';

 

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
        selector: row => row.status
    },
    {
        name: 'Transaction History',
        selector: row => row.history,
        cell: row => (
            <Link to={`http:/localhost:3001/${row.propertyID}`}>
                <button>
                {row.claim}
                </button>
            </Link>
           ) }]


const Properties = ({transactions, publishedProperties}) => {   

    const properties = publishedProperties.map((property) => ({
        id: property.ID_Property,
        propertyID: `#${property.ID_Property}`,
        address: property.Feature.Address,
        type: property.Feature.Type,
        tokensavailable: property.Financial.Number_of_tokens_available,
        // tokenssold: publishedProperties,
        value: property.Financial.Market_value_of_the_property,
        propertystatus: property.Feature.Occupancy_Status,
        history: "fda",

      }));

    return (
        <div className={css.container}>
        <div className={css.table}>
        <h3>My Properties</h3>
        <DataTable
            columns={columns}     
             data={properties}

            
            
        />
        </div>
        </div>


    );
};

export default Properties; 