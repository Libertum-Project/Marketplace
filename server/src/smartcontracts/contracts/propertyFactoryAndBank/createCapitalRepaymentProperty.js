const {
  propertyFactoryAndBankContract,
  owner,
} = require("./contractConfig");

const paymentTokenAddress = '0x43A8768b6F9cA89D5436413609150c6FB087a29E';

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

    const transaction = await propertyFactoryAndBankContract
      .connect(owner)
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
    const receipt = await transaction.wait();
    const logs = receipt.logs;
    return logs[0].address;
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

module.exports = {
  createCapitalRepaymentProperty,
};
