const {
  propertyFactoryAndBankContract,
  getSigner,
} = require("./contractConfig");

async function withdrawFromPassiveIncome(propertyAddress, userAddress) {
  const signer = await getSigner();

  return await propertyFactoryAndBankContract
    .connect(signer)
    .withdrawFromPassiveIncomeProperty(propertyAddress, userAddress);
}

module.exports = {
  withdrawFromPassiveIncome,
};
