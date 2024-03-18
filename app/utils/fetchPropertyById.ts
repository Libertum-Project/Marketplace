import { ethers } from "ethers";
import contract_ABI from "./PropertyABI.json";

export async function fetchPropertyById(propertyId: number) {
  try {
    const response = await fetch(`/api/properties/${propertyId}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }
    const result = await response.json();
    const contractInfo = await getContractInfo(result.data.contract_address);
    const updatedData = Object.assign({}, result.data, contractInfo);

    return updatedData;
  } catch (error: any) {
    throw new Error(
      error.message || "An error occurred while fetching properties",
    );
  }
}

async function getContractInfo(contract_address: string) {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545/",
  );

  const contract = new ethers.Contract(
    contract_address,
    contract_ABI.abi,
    provider,
  );

  const totalSupply = await contract.totalSupply();

  return {
    totalSupply: totalSupply.toNumber(),
  };
}
