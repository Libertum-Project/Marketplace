const { Property } = require("../../db.js");

async function toggleBestSellerStatus(id) {
  const property = await Property.findByPk(id);

  if (!property) {
    throw new Error("Property not found");
  }

  property.IsBestSeller = !property.IsBestSeller;

  await property.save();

  return property;
}

module.exports = { toggleBestSellerStatus };
