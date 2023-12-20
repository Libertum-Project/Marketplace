"use client";

import { useState, useEffect } from "react";
import PropertyContext from "./PropertyContext";
import { getProperties } from "../utils/fetchProperties";

const PropertyProvider = ({ children }) => {
  const [allProperties, setAllProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const reFetchProperties = async () => {
    const newProperties = await getProperties();
    setAllProperties(newProperties);
  };

  useEffect(() => {
    setIsLoading(true)
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
