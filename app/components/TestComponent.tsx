"use client";
import { type ReactElement } from "react";

import { useContext } from "react";
import PropertyContext from "../context/PropertyContext";

export function TestComponent(): ReactElement {
  const { allProperties, setReFetchProperties } = useContext(PropertyContext);

  const handleButton = () => {
    setReFetchProperties();
  };
  return (
    <>
      {allProperties.map((property: any) => (
        <p key={property.Address}>{property.Address}</p>
      ))}
      <button onClick={handleButton}>Refetch</button>
    </>
  );
}
