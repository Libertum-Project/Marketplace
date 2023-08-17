const { withdraw } = require("../../smartcontracts/smartContractsFunctions");

async function withdrawHandler(req, res) {
  try {
    const { propertyAddress, userAddress, propertyType } = req.body;
    await withdraw(propertyAddress, userAddress, propertyType);

    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    res.status(500).send(error.revert.args);
  }
}

module.exports = { withdrawHandler };
