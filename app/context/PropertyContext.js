"use client";

import { createContext } from "react";

const PropertyContext = createContext({
  allProperties: [],
  setAllProperties: () => {},
  setReFetchProperties: () => {},
});

export default PropertyContext;
