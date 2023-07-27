const { createCapitalRepaymentProperty } = require("./contracts/propertyFactoryAndBank/createCapitalRepaymentProperty");

function createSmartContractProperty(propertyData, propertyID) {
//  console.log(property.financialData.Investment_type)
  createCapitalRepaymentProperty(propertyData, propertyID)
}

module.exports = { createSmartContractProperty }
