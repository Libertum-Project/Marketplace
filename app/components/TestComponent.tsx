"use client";
import { type ReactElement } from "react";

import { useContext } from "react";
import PropertyContext from "../context/PropertyContext";
import { Header } from "./Header/Header";

export function TestComponent(): ReactElement {
  const { allProperties, reFetchProperties, getPropertyDetails } =
    useContext(PropertyContext);

  const handleButton = () => {
    reFetchProperties();
  };

  const handleGetDetails = (ID: number) => {
    const propertyDetails = getPropertyDetails(ID);
    console.log(propertyDetails);
  };

  return (
    <>
      <Header />
      {allProperties.map((property: any) => (
        <img
          key={property.Address}
          src={property.Feature.Link_Image[0]}
          alt={property.Address}
          style={{ width: 500 }}
          onClick={(e) => {
            handleGetDetails(property.ID_Property);
          }}
        />
      ))}
      <button onClick={handleButton}>Refetch</button>
    </>
  );
}
