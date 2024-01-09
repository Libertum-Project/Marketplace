"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import PropertyContext from "@/app/context/PropertyContext";
import Loading from "@/app/components/MessageBox/Loading";
import { SelectAmount } from "./SelectAmount";
import { ConfirmInvestment } from "./ConfirmInvestment";

export default function PropertyDetails({
  params,
}: {
  params: { propertyID: string };
}): any {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [amount, setAmount] = useState(10)
  const { getPropertyDetails, isLoading }: any = useContext(PropertyContext);
  const ID: number = parseInt(params.propertyID);
  const propertyDetails = getPropertyDetails(ID);

  if (!isLoading && !propertyDetails.length) {
    router.push("../404");
    return <Loading />;
  }

  return (
    <>
      {currentStep === 1 ? (
        <SelectAmount
          propertyDetails={propertyDetails}
          setCurrentStep={setCurrentStep}
          amount={amount}
          setAmount={setAmount}
        />
      ) : (
        <ConfirmInvestment
          propertyDetails={propertyDetails}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          amount={amount}
        />
      )}
    </>
  );
}
