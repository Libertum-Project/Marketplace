const {
  propertyFactoryAndBankContract,
  owner
} = require("./contractConfig");

async function withdrawFromCapitalRepayment(propertyAddress, userAddress) {
  return await propertyFactoryAndBankContract
    .connect(owner)
    .withdrawFromCapitalRepaymentProperty(propertyAddress, userAddress);
}

module.exports = {
  withdrawFromCapitalRepayment,
};
