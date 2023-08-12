const { Property, Financial } = require("../../db");
const { setPropertyStatusSmartContracts } = require('../../smartcontracts/smartContractsFunctions');

async function setPropertyStatus(propertyId, status) {
  const property = await Property.findByPk(propertyId, {
    include: [Financial],
  });

  if (!property) {
    throw new Error("Property not found.");
  }

  const propertyType = property.Financial.Investment_type
  const propertyAddress = property.Address;
  await setPropertyStatusSmartContracts(propertyAddress, propertyType, status)
  await property.update({ IsActive: status });
}

module.exports = { setPropertyStatus };
