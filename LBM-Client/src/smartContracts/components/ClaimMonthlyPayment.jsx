import { ethers } from "ethers";
import propertyFactoryAndBankABI from "../ABI/PropertyFactoryAndBank.json";

const ClaimMonthlyPayment = ({ propertyAddress, quantity, propertyType }) => {
  const tokenIds = new Array(quantity).fill().map((_, index) => index);
  const propertyFactoryAndBankAddress =
    "0x18d83e26bC15BBFa4F14D38A9991e12554ACB906";

  const handleClaimClick = async (event) => {
    event.preventDefault();
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
    await propertyFactoryAndBankContract
      .connect(signer)
      .claimCapitalRepayment(propertyAddress, tokenIds, {
        gasLimit: 200000,
      });
  }

  async function claimPassiveIncomeProperty(
    propertyFactoryAndBankContract,
    signer
  ) {
    await propertyFactoryAndBankContract
      .connect(signer)
      .claimPassiveIncome(propertyAddress, tokenIds, {
        gasLimit: 200000,
      });
  }

  return (
    <>
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
