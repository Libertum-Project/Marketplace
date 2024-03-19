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
    const properties = filteredProperties
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setProperties(properties);
    setIsLoading(false);
  };

  const fetchProperties = async () => {
    const fetchedProperties = await fetchAllProperties();
    const properties = fetchedProperties
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setProperties(properties);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPropertyDetails = (ID) => {};

  const sortProperties = async (order) => {
    let sortedProperties = [];

    if (order === 'Newest First') {
      // Sorting in descending order for 'Newest first'
      sortedProperties = properties
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (order === 'Old First') {
      // Sorting in ascending order for 'Old first'
      sortedProperties = properties
        .slice()
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    setProperties(sortedProperties);
  };

  const value = {
    properties,
    reFetchProperties,
    getPropertyDetails,
    isLoading,
    getFilteredProperties,
    sortProperties,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyProvider;
