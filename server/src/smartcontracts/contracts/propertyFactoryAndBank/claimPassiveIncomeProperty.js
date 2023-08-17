const {
  propertyFactoryAndBankContract,
  getSigner,
} = require("./contractConfig");

async function claimPassiveIncomeProperty(propertyAddress, quantity) {
  const signer = await getSigner();
  const tokenIds = new Array(quantity).fill().map((_, index) => index);
  await propertyFactoryAndBankContract
    .connect(signer)
    .claimPassiveIncome(propertyAddress, tokenIds);
}

module.exports = {
  claimPassiveIncomeProperty,
};
