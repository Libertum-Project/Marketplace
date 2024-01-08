"use client";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import Loading from "@/app/components/MessageBox/Loading";
import PropertyContext from "@/app/context/PropertyContext";

export default function PropertyDetails({
  params,
}: {
  params: { propertyID: string };
}): any {
  const router = useRouter();

  const { getPropertyDetails, isLoading }: any = useContext(PropertyContext);
  const ID: number = parseInt(params.propertyID);

  const propertyDetails = getPropertyDetails(ID);

  if (!isLoading && !propertyDetails.length) {
    router.push("../404");
    return <Loading />;
  }

  console.log(propertyDetails);

  return (
    <>
      <h1>Buy Tokens of Property: {params.propertyID}</h1>
    </>
  );
}
