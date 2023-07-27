const { propertyFactoryAndBankContract, getSigner } = require("./contractConfig");

async function setActiveCapitalRepayment() {
  const signer = await getSigner();
  return await propertyFactoryAndBankContract
    .connect(signer)
    .setActiveCapitalRepayment("0xa16E02E87b7454126E5E10d957A927A7F5B5d2be");
}

async function setInactiveCapitalRepayment() {
  const signer = await getSigner();
  return await propertyFactoryAndBankContract
    .connect(signer)
    .setInactiveCapitalRepayment("0xa16E02E87b7454126E5E10d957A927A7F5B5d2be");
}

module.exports = { setActiveCapitalRepayment, setInactiveCapitalRepayment };
