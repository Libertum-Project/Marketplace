const {
  propertyFactoryAndBankContract,
  owner
} = require("./contractConfig");

async function withdrawFromPassiveIncome(propertyAddress, userAddress) {
  return await propertyFactoryAndBankContract
    .connect(owner)
    .withdrawFromPassiveIncomeProperty(propertyAddress, userAddress);
}

module.exports = {
  withdrawFromPassiveIncome,
};
