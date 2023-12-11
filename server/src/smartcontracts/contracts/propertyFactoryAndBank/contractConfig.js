require('dotenv').config();
const { ethers } = require("ethers");
const propertyFactoryAndBankABI =
  require("../../ABI/PropertyFactoryAndBank.json").abi;
const propertyFactoryAndBankAddress =
  "0x18d83e26bC15BBFa4F14D38A9991e12554ACB906";
const provider = new ethers.JsonRpcProvider(
  "https://polygon-mumbai.g.alchemy.com/v2/10M9k4S3Zo1GHPfp2rLZ3FA4NgfWaJ4N"
);

const ownerPrivateKey = process.env.ownerPrivateKey;
const owner = new ethers.Wallet(ownerPrivateKey, provider);

const propertyFactoryAndBankContract = new ethers.Contract(
  propertyFactoryAndBankAddress,
  propertyFactoryAndBankABI,
  owner
);

module.exports = {
  propertyFactoryAndBankContract,
  owner,
};
