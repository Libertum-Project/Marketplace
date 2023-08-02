const {
  propertyFactoryAndBankContract,
  getSigner,
} = require("./contractConfig");

async function createPassiveIncomeProperty(propertyData, propertyID) {
  try {
    const { financialData } = propertyData;
    const name = propertyID;
    const symbol = "TP";
    const totalSupply = financialData.Number_of_tokens_available;
    const pricePerToken = financialData.Token_Price;
    const collateralizedValue = totalSupply * pricePerToken;
    const interestRate = financialData.Rental_yield;
    const paymentTokenAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";
    const signer = await getSigner();
    return await propertyFactoryAndBankContract
      .connect(signer)
      .newPassiveIncomeProperty(
        name,
        symbol,
        totalSupply,
        pricePerToken,
        collateralizedValue,
        interestRate,
        paymentTokenAddress
      );
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

module.exports = {
  createPassiveIncomeProperty,
};
