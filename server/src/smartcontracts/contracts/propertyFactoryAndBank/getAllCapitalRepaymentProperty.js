const { propertyFactoryAndBankContract } = require("./contractConfig");

async function getAllCapitalRepaymentPropertyAddresses() {
  const numProperties =
    await propertyFactoryAndBankContract.numCapitalRepaymentProperties();

  const propertyAddresses = [];

  for (let i = 0; i < numProperties; i++) {
    const propertyAddress =
      await propertyFactoryAndBankContract.capitalRepaymentProperties(i);
    propertyAddresses.push(propertyAddress);
  }

  return propertyAddresses;
}

module.exports = {
  getAllCapitalRepaymentPropertyAddresses,
};
