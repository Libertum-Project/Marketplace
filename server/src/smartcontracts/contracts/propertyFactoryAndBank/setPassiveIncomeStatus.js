const { propertyFactoryAndBankContract, getSigner } = require("./contractConfig");

async function setActivePassiveIncome(propertyAddress) {
  const signer = await getSigner();
  return await propertyFactoryAndBankContract
    .connect(signer)
    .setActivePassiveIncome(propertyAddress);
}

async function setInactivePassiveIncome(propertyAddress) {
  const signer = await getSigner();
  return await propertyFactoryAndBankContract
    .connect(signer)
    .setInactivePassiveIncome(propertyAddress);
}

module.exports = { setActivePassiveIncome, setInactivePassiveIncome };
