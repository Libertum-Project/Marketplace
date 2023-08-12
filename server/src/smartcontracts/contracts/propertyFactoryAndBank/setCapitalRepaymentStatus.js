const { propertyFactoryAndBankContract, getSigner } = require("./contractConfig");

async function setActiveCapitalRepayment(propertyAddress) {
  const signer = await getSigner();
  return await propertyFactoryAndBankContract
    .connect(signer)
    .setActiveCapitalRepayment(propertyAddress);
}

async function setInactiveCapitalRepayment(propertyAddress) {
  const signer = await getSigner();
  return await propertyFactoryAndBankContract
    .connect(signer)
    .setInactiveCapitalRepayment(propertyAddress);
}

module.exports = { setActiveCapitalRepayment, setInactiveCapitalRepayment };
