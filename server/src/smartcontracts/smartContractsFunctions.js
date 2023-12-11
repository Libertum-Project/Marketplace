const {
  createCapitalRepaymentProperty,
} = require("./contracts/propertyFactoryAndBank/createCapitalRepaymentProperty");
const {
  createPassiveIncomeProperty,
} = require("./contracts/propertyFactoryAndBank/createPassiveIncomeProperty");

const {
  setActiveCapitalRepayment,
  setInactiveCapitalRepayment,
} = require("./contracts/propertyFactoryAndBank/setCapitalRepaymentStatus");

const {
  setActivePassiveIncome,
  setInactivePassiveIncome,
} = require("./contracts/propertyFactoryAndBank/setPassiveIncomeStatus");

const { withdrawFromCapitalRepayment } = require('./contracts/propertyFactoryAndBank/withdrawCapitalRepayment');
const { withdrawFromPassiveIncome } = require('./contracts/propertyFactoryAndBank/withdrawPassiveIncome');

async function createSmartContractProperty(propertyData, propertyID) {
  if (propertyData.financialData.Investment_type === "capitalRepayment") {
    return await createCapitalRepaymentProperty(propertyData, propertyID);
  } else if (propertyData.financialData.Investment_type === "passiveIncome") {
    return await createPassiveIncomeProperty(propertyData, propertyID);
  }
}

async function setPropertyStatusSmartContracts(
  propertyAddress,
  propertyType,
  status
) {
  if (propertyType === "capitalRepayment" && status === true) {
    await setActiveCapitalRepayment(propertyAddress);
  } else if (propertyType === "capitalRepayment" && status === false) {
    await setInactiveCapitalRepayment(propertyAddress);
  } else if (propertyType === "passiveIncome" && status === true) {
    await setActivePassiveIncome(propertyAddress);
  } else if (propertyType === "passiveIncome" && status === false) {
    await setInactivePassiveIncome(propertyAddress);
  }
}

async function withdraw(propertyAddress, userAddress, propertyType) {
  if (propertyType === "capitalRepayment") {
    await withdrawFromCapitalRepayment(propertyAddress, userAddress)
  } else if (propertyType === "passiveIncome") {
    await withdrawFromPassiveIncome(propertyAddress, userAddress)
  }
}

module.exports = {
  createSmartContractProperty,
  setPropertyStatusSmartContracts,
  withdraw,
};
