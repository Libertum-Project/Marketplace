const { propertyFactoryAndBankContract, owner } = require("./contractConfig");

async function setActiveCapitalRepayment(propertyAddress) {
  return await propertyFactoryAndBankContract
    .connect(owner)
    .setActiveCapitalRepayment(propertyAddress);
}

async function setInactiveCapitalRepayment(propertyAddress) {
  return await propertyFactoryAndBankContract
    .connect(owner)
    .setInactiveCapitalRepayment(propertyAddress);
}

module.exports = { setActiveCapitalRepayment, setInactiveCapitalRepayment };
