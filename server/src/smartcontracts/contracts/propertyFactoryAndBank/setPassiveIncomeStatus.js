const { propertyFactoryAndBankContract, owner} = require("./contractConfig");

async function setActivePassiveIncome(propertyAddress) {
  return await propertyFactoryAndBankContract
    .connect(owner)
    .setActivePassiveIncome(propertyAddress);
}

async function setInactivePassiveIncome(propertyAddress) {
  return await propertyFactoryAndBankContract
    .connect(owner)
    .setInactivePassiveIncome(propertyAddress);
}

module.exports = { setActivePassiveIncome, setInactivePassiveIncome };
