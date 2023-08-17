const {
  propertyFactoryAndBankContract,
  getSigner,
} = require("./contractConfig");

async function claimCapitalRepaymentProperty(propertyAddress, quantity) {
  const signer = await getSigner();
  const tokenIds = new Array(quantity).fill().map((_, index) => index);

  await propertyFactoryAndBankContract
    .connect(signer)
    .claimCapitalRepayment(propertyAddress, tokenIds);
}

module.exports = {
  claimCapitalRepaymentProperty,
};
