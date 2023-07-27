const { propertyFactoryAndBankContract, getSigner } = require("./contractConfig")


async function claimCapitalRepaymentProperty() {
  const signer = await getSigner();
  const propertyAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be";
  const tokenIds = [0];
  console.log(
    await propertyFactoryAndBankContract.connect(signer).claimCapitalRepayment(
      propertyAddress,
      tokenIds
    )
  );
}

module.exports = {
  claimCapitalRepaymentProperty
}

