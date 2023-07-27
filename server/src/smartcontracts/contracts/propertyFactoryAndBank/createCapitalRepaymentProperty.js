const {
  propertyFactoryAndBankContract,
  getSigner,
} = require("./contractConfig");

async function createCapitalRepaymentProperty(propertyData, propertyID) {
  try {
    const { financialData } = propertyData;

    const name = propertyID;
    const symbol = "TP";
    const totalSupply = financialData.Number_of_tokens_available;
    const pricePerToken = financialData.Token_Price;
    const collateralizedValue = totalSupply * pricePerToken;
    const durationInMonths = financialData.Capital_payment_duration;
    const interestRate = financialData.Rental_yield;
    const paymentTokenAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7";

    const signer = await getSigner();
    return await propertyFactoryAndBankContract
      .connect(signer)
      .newCapitalRepaymentProperty(
        name,
        symbol,
        totalSupply,
        pricePerToken,
        collateralizedValue,
        durationInMonths,
        interestRate,
        paymentTokenAddress
      );
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

module.exports = {
  createCapitalRepaymentProperty,
};
