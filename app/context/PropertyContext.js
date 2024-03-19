"use client";

import { createContext } from "react";

const PropertyContext = createContext({
  properties: [],
  setProperties: () => {},
  reFetchProperties: () => {},
  getPropertyDetails: () => {},
  getFilteredProperties: () => {},
  isLoading: false,
});

export default PropertyContext;
