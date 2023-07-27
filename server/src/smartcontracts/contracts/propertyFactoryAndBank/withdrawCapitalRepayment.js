const {
  propertyFactoryAndBankContract,
  getSigner,
} = require("./contractConfig");

async function withdrawCapitalRepayment() {
  const signer = await getSigner();
  const from = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be";
  const to = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  return await propertyFactoryAndBankContract
    .connect(signer)
    .withdrawFromCapitalRepaymentProperty(from, to);
}

module.exports = {
  withdrawCapitalRepayment,
};
