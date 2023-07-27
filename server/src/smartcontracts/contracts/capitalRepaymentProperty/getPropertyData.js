const { capitalRepaymentPropertyContract } = require("./contractConfig");

async function getPropertyData() {
  const isActive = await capitalRepaymentPropertyContract.isActive();
  const startTime = await capitalRepaymentPropertyContract.startTime();
  const totalSupply = await capitalRepaymentPropertyContract.totalSupply();
  const currentToken = await capitalRepaymentPropertyContract.currentToken();
  const pricePerToken = await capitalRepaymentPropertyContract.pricePerToken();
  const collateralizedValue =
    await capitalRepaymentPropertyContract.collateralizedValue();
  const durationInMonths =
    await capitalRepaymentPropertyContract.durationInMonths();
  const interestRate = await capitalRepaymentPropertyContract.interestRate();

  const data = {
    isActive,
    startTime,
    totalSupply,
    currentToken,
    pricePerToken,
    collateralizedValue,
    durationInMonths,
    interestRate,
  };

  return data;
}

module.exports = {
  getPropertyData,
}
