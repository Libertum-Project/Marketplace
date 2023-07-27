const { ethers } = require("ethers");
const propertyFactoryAndBankABI =
  require("../../ABI/PropertyFactoryAndBank.json").abi;
const propertyFactoryAndBankAddress =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const provider = new ethers.JsonRpcProvider();

const propertyFactoryAndBankContract = new ethers.Contract(
  propertyFactoryAndBankAddress,
  propertyFactoryAndBankABI,
  provider
);

async function getSigner() {
  return await provider.getSigner();
}

module.exports = {
  propertyFactoryAndBankContract,
  getSigner,
}
