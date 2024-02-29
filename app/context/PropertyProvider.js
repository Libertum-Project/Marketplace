"use client";

import { useState, useEffect, useContext } from "react";
import MessageBoxContext from "./MessageBoxContext";
import PropertyContext from "./PropertyContext";
import {
  getProperties,
  fetchFilteredProperties,
} from "../utils/fetchProperties";

const PropertyProvider = ({ children }) => {
  const { isLoading, setIsLoading } = useContext(MessageBoxContext);
  const [allProperties, setAllProperties] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    rentalYield: "",
    location: "",
    financeType: "",
  });

  const reFetchProperties = async () => {
    const newProperties = await getProperties();
    setAllProperties(newProperties);
  };

  const getFilteredProperties = async () => {
    const { rentalYield, location, financeType } = selectedFilters;
    const filters = `financeType=${financeType}&rentalYield=${rentalYield}&location=${location}`;
    const filteredProperties = await fetchFilteredProperties(filters);
    setAllProperties(filteredProperties);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      setAllProperties(await getProperties());
      setIsLoading(false);
    };

    fetchProperties();
  }, []);

  const getPropertyDetails = (ID) => {
    const propertyDetails = allProperties.filter(
      (property) => property.ID_Property === ID,
    );

    return propertyDetails;
  };

  const value = {
    allProperties,
    reFetchProperties,
    getPropertyDetails,
    isLoading,
    selectedFilters,
    setSelectedFilters,
    getFilteredProperties,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;