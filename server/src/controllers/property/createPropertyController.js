const { Property, Owner, Financial, Feature, User } = require("../../db");

const {
  createSmartContractProperty,
} = require("../../smartcontracts/smartContractsFunctions");
async function createProperty(propertyData) {
  const { ownerData, featureData, financialData } = propertyData;

  try {
    if (
      !ownerData ||
      Object.values(ownerData).some((value) => value === null)
    ) {
      throw new Error("Owner data is incomplete");
    }

    if (
      !financialData ||
      Object.values(financialData).some((value) => value === null)
    ) {
      throw new Error("Financial data is incomplete");
    }

    if (
      !featureData ||
      Object.values(featureData).some((value) => value === null)
    ) {
      throw new Error("Feature data is incomplete");
    }

    const existingOwner = await Owner.findOne({
      where: { Firstname: ownerData.Firstname, Mail: ownerData.Mail },
    });

    const owner = existingOwner || (await Owner.create(ownerData));
    const user = await User.findByPk(ownerData.UserID);

    if (!user || !owner) {
      throw new Error("Failed to create owner");
    }

    const financial = await Financial.create(financialData);
    if (!financial) {
      throw new Error("Failed to create financial");
    }

    const feature = await Feature.create(featureData);
    if (!feature) {
      throw new Error("Failed to create feature");
    }

    const property = await Property.create({
      ID_owner: owner.ID_owner,
      ID_Financials: financial.ID_Financial,
      ID_Features: feature.ID_Feature,
    });

    const propertyID = property.ID_Property;
    await user.addPublishedProperties(propertyID);

    if (!property) {
      throw new Error("Failed to create property");
    }

    const address = await createSmartContractProperty(
      propertyData,
      property.ID_Property
    );
    property.Address = address;
    await property.save();

    return property;
  } catch (error) {
    console.error("Error creating property:", error.message);
    throw error;
  }
}

module.exports = { createProperty };
