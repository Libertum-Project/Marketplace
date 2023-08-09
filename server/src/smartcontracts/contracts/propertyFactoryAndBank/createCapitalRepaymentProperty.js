const {
  propertyFactoryAndBankContract,
  getSigner,
} = require("./contractConfig");

const paymentTokenAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

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
    const signer = await getSigner();

    const transaction = await propertyFactoryAndBankContract
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
