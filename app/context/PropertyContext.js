"use client";

import { createContext } from "react";

const PropertyContext = createContext({
  allProperties: [],
  setAllProperties: () => {},
  reFetchProperties: () => {},
  getPropertyDetails: () => {},
  selectedFilters: {},
  setSelectedFilters: () => {},
  getFilteredProperties: () => {},
});

export default PropertyContext;
