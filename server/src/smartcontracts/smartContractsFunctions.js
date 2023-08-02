const {
  createCapitalRepaymentProperty,
} = require("./contracts/propertyFactoryAndBank/createCapitalRepaymentProperty");
const {
  createPassiveIncomeProperty,
} = require("./contracts/propertyFactoryAndBank/createPassiveIncomeProperty");

function createSmartContractProperty(propertyData, propertyID) {
  if (propertyData.financialData.Investment_type === "capitalRepayment") {
    createCapitalRepaymentProperty(propertyData, propertyID);
  } else if (propertyData.financialData.Investment_type === "passiveIncome") {
    createPassiveIncomeProperty(propertyData, propertyID);
  }
}

module.exports = { createSmartContractProperty };
