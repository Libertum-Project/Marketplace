"use client";

import { useState, useEffect } from "react";
import PropertyContext from "./PropertyContext";
import { getProperties } from "../utils/fetchProperties";

const PropertyProvider = ({ children }) => {
  const [allProperties, setAllProperties] = useState([]);

  const setReFetchProperties = async () => {
    const newProperties = await getProperties();
    setAllProperties(newProperties);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      setAllProperties(await getProperties());
    };

    fetchProperties();
  }, []);

  const value = {
    allProperties,
    setReFetchProperties,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
