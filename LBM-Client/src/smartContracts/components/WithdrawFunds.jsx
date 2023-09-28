import { ethers } from "ethers";
import { useState } from "react";
import propertyFactoryAndBankABI from "../ABI/PropertyFactoryAndBank.json";
import Loading from "./LoadingBtn.jsx";
import FailMessage from "./MessageBox/FailMessage";
import SuccessMessage from "./MessageBox/SuccessMessage";
import PendingMessage from "./MessageBox/PendingMessage";

const withdrawFunds = ({ propertyAddress, propertyType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const propertyFactoryAndBankAddress =
    "0x18d83e26bC15BBFa4F14D38A9991e12554ACB906";

  const handleWithdraw = async (event) => {
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
        ? withdrawFromCapitalRepaymentProperty(propertyFactoryAndBankContract, signer, provider)
        : withdrawFromPassiveIncomeProperty(propertyFactoryAndBankContract, signer);
    } else alert("Metamask not found.");
  };

  async function withdrawFromCapitalRepaymentProperty(propertyFactoryAndBankContract, signer) {
    const userAddress = window.ethereum.selectedAddress
    try {
      const withdrawTransaction = await propertyFactoryAndBankContract
        .connect(signer)
        .withdrawFromCapitalRepaymentProperty(propertyAddress, userAddress, { gasLimit: 2000000 })

      setShowPendingMessage(true);
      const receipt = await withdrawTransaction.wait();
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

  async function withdrawFromPassiveIncomeProperty(propertyFactoryAndBankContract, signer) {
    const userAddress = window.ethereum.selectedAddress
    try {
      const withdrawTransaction = await propertyFactoryAndBankContract
        .connect(signer)
        .withdrawFromCapitalRepaymentProperty(propertyAddress, userAddress, { gasLimit: 2000000 })

      setShowPendingMessage(true);
      const receipt = await withdrawTransaction.wait();
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
      {showPendingMessage ? <PendingMessage /> : null}
      {showFailMessage ? (
        <FailMessage setShowFailMessage={setShowFailMessage} />
      ) : null}
      {showSuccessMessage ? (
        <SuccessMessage setShowSuccessMessage={setShowSuccessMessage} />
      ) : null}

      <button
        style={{
          backgroundColor: "gray",
          borderRadius: "4px",
          color: "white",
          padding: "8px",
        }}
        onClick={(event) => handleWithdraw(event)}
      >
        Withdraw
      </button>
    </>
  )
}

export default withdrawFunds