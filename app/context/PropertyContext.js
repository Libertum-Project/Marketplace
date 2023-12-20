"use client";

import { createContext } from "react";

const PropertyContext = createContext({
  allProperties: [],
  setAllProperties: () => {},
  reFetchProperties: () => {},
  getPropertyDetails: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export default PropertyContext;
