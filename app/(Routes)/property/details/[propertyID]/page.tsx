"use client";
import { type ReactElement } from "react";
import { useContext } from "react";
import PropertyContext from "@/app/context/PropertyContext";

export default function PropertyDetails({
  params,
}: {
  params: { propertyID: string };
}): ReactElement {
  const { getPropertyDetails, isLoading } = useContext(PropertyContext);
  const ID: number = parseInt(params.propertyID);

  const propertyDetails = getPropertyDetails(ID);
  console.log(propertyDetails);

  if (isLoading) {
    return <p>Loading property details...</p>;
  }

  return (
    <>
      <h1>Property Details Number: {params.propertyID}</h1>
    </>
  );
}
