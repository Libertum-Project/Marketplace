'use client';

import { useState, useEffect } from 'react';
import PropertyContext from './PropertyContext';
import { fetchAllProperties } from '../utils/fetchAllProperties';
import { fetchFilteredProperties } from '../utils/fetchFilteredProperties';

const PropertyProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  const reFetchProperties = async () => {
    const newProperties = await fetchAllProperties();
    setProperties(newProperties);
  };

  const getFilteredProperties = async (filters) => {
    setIsLoading(true);

    const filteredProperties = await fetchFilteredProperties(filters);
    setProperties(filteredProperties);
    setIsLoading(false);
  };

  const fetchProperties = async () => {
    const properties = await fetchAllProperties();
    setProperties(properties);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPropertyDetails = (ID) => {};

  const value = {
    properties,
    reFetchProperties,
    getPropertyDetails,
    isLoading,
    getFilteredProperties,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
