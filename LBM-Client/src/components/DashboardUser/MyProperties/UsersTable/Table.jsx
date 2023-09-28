import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import DataTable from 'react-data-table-component';   
import css from './TableUsers.module.scss';
import { Link } from 'react-router-dom';
import { withdrawFunds } from '../../../../../redux/features/propertySlice';
import PropertyDetails from '../PropertyDetails/PropertyDetails.jsx';

const Properties = ({ transactions, publishedProperties }) => {   
    
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
        {
            name: "Property Value",
            selector: row => row.value
        },
        {
            name: "Status",
            selector: row => row.propertystatus
        },
        {
            name: 'Edit',
            selector: row => row.edit,
            cell: row => (
                <button
                    onClick={() => handleEditClick(row)}
                    style={{
                        backgroundColor: "gray",
                        borderRadius: "5px",
                        color: "white",
                        padding: "8px",
                    }}
                >
                    {row.edit}
                </button>
            )
        },
        {
            name: "Withdraw",
            selector: row => row.withdrawFunds,
            cell: row => (
                <Link to={`http:/localhost:3001/${row.propertyID}`}>
                    <button
                        style={{
                            backgroundColor: "gray",
                            borderRadius: "5px",
                            color: "white",
                            padding: "8px",
                        }}
                    >
                        {row.withdrawFunds}
                    </button>
                </Link>
            )
        },
    ];

    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleEditClick = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    const dispatch = useDispatch();
    const claimError = useSelector((state) =>state.property.error)
    const [error, setError] = useState(claimError);

    const handleClickWithdraw = (event, address, type) => {
        const propertyType = type;
        const propertyAddress = address;

        event.preventDefault();
        dispatch(
            withdrawFunds({propertyAddress, propertyType})
            .then(() => {
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
        value: property.Financial.Market_value_of_the_property,
        propertystatus: property.Feature.Occupancy_Status,
        edit: "Edit",
        withdrawFunds: (
            <button
                onClick={(event) =>
                    handleClickWithdraw(
                        event,
                        property.Feature.Address,
                        property.Feature.Type                         
                    )
                }
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

                {/* Renderizamos el modal cuando isModalOpen es true */}
                {isModalOpen && (
                    <PropertyDetails 
                    property = { selectedProperty }
                    closeModal = { () => setIsModalOpen(false) }
                    />
                    
                )}
            </div>
        </div>
    );
};

export default Properties;
