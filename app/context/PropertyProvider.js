"use client";

import { useState, useEffect, useContext } from "react";
import MessageBoxContext from "./MessageBoxContext";
import PropertyContext from "./PropertyContext";
import { getProperties } from "../utils/fetchProperties";

const PropertyProvider = ({ children }) => {
  const { isLoading, setIsLoading } = useContext(MessageBoxContext)
  const [allProperties, setAllProperties] = useState([]);

  const reFetchProperties = async () => {
    const newProperties = await getProperties();
    setAllProperties(newProperties);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      setAllProperties(await getProperties());
      setIsLoading(false)
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
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
