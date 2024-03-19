"use client";

import { createContext } from "react";

const PropertyContext = createContext({
  properties: [],
  setProperties: () => {},
  reFetchProperties: () => {},
  getPropertyDetails: () => {},
  getFilteredProperties: () => {},
  sortProperties: () => {},
  isLoading: false,
});

export default PropertyContext;
