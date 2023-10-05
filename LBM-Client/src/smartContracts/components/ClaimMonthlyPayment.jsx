import { ethers } from "ethers";
import { useState } from "react";
import propertyFactoryAndBankABI from "../ABI/PropertyFactoryAndBank.json";
import Loading from "./LoadingBtn.jsx";
import FailMessage from "./MessageBox/FailMessage";
import SuccessMessage from "./MessageBox/SuccessMessage";
import PendingMessage from "./MessageBox/PendingMessage";

const ClaimMonthlyPayment = ({ propertyAddress, quantity, propertyType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const tokenIds = new Array(quantity).fill().map((_, index) => index);
  const propertyFactoryAndBankAddress =
    "0x18d83e26bC15BBFa4F14D38A9991e12554ACB906";

  const handleClaimClick = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    if (window.ethereum) {
      await window.ethereum.enable();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const propertyFactoryAndBankContract = new ethers.Contract(
        propertyFactoryAndBankAddress,
        propertyFactoryAndBankABI.abi,
        signer
      );

      propertyType === "capitalRepayment"
        ? claimCapitalRepaymentProperty(propertyFactoryAndBankContract, signer)
        : claimPassiveIncomeProperty(propertyFactoryAndBankContract, signer);
    } else alert("Metamask not found.");
  };

  async function claimCapitalRepaymentProperty(
    propertyFactoryAndBankContract,
    signer
  ) {
    try {
      const claimTransaction = await propertyFactoryAndBankContract
        .connect(signer)
        .claimCapitalRepayment(propertyAddress, tokenIds, {
          gasLimit: 2000000,
        });
      setShowPendingMessage(true);
      const receipt = await claimTransaction.wait();

      if (receipt.status === 1) {
        setShowSuccessMessage(true);
      } else {
        setShowFailMessage(true);
      }
      setIsLoading(false);
      setShowPendingMessage(false);
    } catch (error) {
      setIsLoading(false);
      setShowPendingMessage(false);
      setShowFailMessage(true);
    }
  }

  async function claimPassiveIncomeProperty(
    propertyFactoryAndBankContract,
    signer
  ) {
    try {
      const claimTransaction = await propertyFactoryAndBankContract
        .connect(signer)
        .claimPassiveIncome(propertyAddress, tokenIds, {
          gasLimit: 2000000,
        });
      setShowPendingMessage(true);
      const receipt = await claimTransaction.wait();

      if (receipt.status === 1) {
        setShowSuccessMessage(true);
      } else {
        setShowFailMessage(true);
      }
      setIsLoading(false);
      setShowPendingMessage(false);
    } catch (error) {
      setIsLoading(false);
      setShowPendingMessage(false);
      setShowFailMessage(true);
    }
  }

  return (
    <>
      {isLoading ? <Loading /> : null}
      {showPendingMessage ? <PendingMessage messagge="Claim in progress..."   /> : null}
      {showFailMessage ? (
        <FailMessage setShowFailMessage={setShowFailMessage} />
      ) : null}
      {showSuccessMessage ? (
        <SuccessMessage
          setShowSuccessMessage={setShowSuccessMessage}
          messagge="Awesome! You can now celebrate your successfully claimed payment"
          textBtn="Continue"
          redirectURL="/mydashboard"
        />
      ) : null}

      <button
        style={{
          backgroundColor: "gray",
          borderRadius: "4px",
          color: "white",
          padding: "8px",
        }}
        onClick={(event) => handleClaimClick(event)}
      >
        Claim
      </button>
    </>
  );
};

export default ClaimMonthlyPayment;
