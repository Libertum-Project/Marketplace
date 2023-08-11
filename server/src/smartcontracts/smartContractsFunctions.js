const {
  createCapitalRepaymentProperty,
} = require("./contracts/propertyFactoryAndBank/createCapitalRepaymentProperty");
const {
  createPassiveIncomeProperty,
} = require("./contracts/propertyFactoryAndBank/createPassiveIncomeProperty");

const { mintCapitalRepaymentToken } = require('./contracts/capitalRepaymentProperty/mintToken');
const { mintPassiveIncomeToken } = require('./contracts/passiveIncomeProperty/mintToken')

async function createSmartContractProperty(propertyData, propertyID) {
  if (propertyData.financialData.Investment_type === "capitalRepayment") {
    return await createCapitalRepaymentProperty(propertyData, propertyID);
  } else if (propertyData.financialData.Investment_type === "passiveIncome") {
    return await createPassiveIncomeProperty(propertyData, propertyID);
  }
}

async function mintToken(userPrivateKey, propertyAddress, quantity, propertyType) {
  if (propertyType === 'capitalRepayment') {
    await mintCapitalRepaymentToken(userPrivateKey, propertyAddress, quantity);
  } else if (propertyType === 'passiveIncome') {
    await mintPassiveIncomeToken(userPrivateKey, propertyAddress, quantity);
  }
}

module.exports = { createSmartContractProperty, mintToken };
