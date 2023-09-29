const { DraftProperty, Owner, Financial, Feature, User } = require("../../db");

async function createDraftProperty(propertyData) {
  const { ownerData, featureData, financialData } = propertyData;

  try {
    if (!ownerData) {
      throw new Error("Owner data is incomplete");
    }

    if (!financialData) {
      throw new Error("Financial data is incomplete");
    }

    if (!featureData) {
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

    const draftProperty = await DraftProperty.create({
      ID_owner: owner.ID_owner,
      ID_Financials: financial.ID_Financial,
      ID_Features: feature.ID_Feature,
    });

    const propertyID = draftProperty.ID_Property;
    await user.addDraftProperties(propertyID);

    if (!draftProperty) {
      throw new Error("Failed to create property");
    }

    return draftProperty;
  } catch (error) {
    console.error("Error creating property:", error.message);
    throw error;
  }
}

module.exports = { createDraftProperty };
