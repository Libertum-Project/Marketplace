const {
  claimMonthlyPayment,
} = require("../../smartcontracts/smartContractsFunctions");

async function claimMonthlyPaymentHandler(req, res) {
  try {
    const { propertyAddress, propertyType, quantity } = req.body;
    await claimMonthlyPayment(propertyAddress, propertyType, quantity);

    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.revert.args);
  }
}

module.exports = { claimMonthlyPaymentHandler };
