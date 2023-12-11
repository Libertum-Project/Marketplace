const { DraftProperty, OwnerDraft, FinancialDraft, FeatureDraft, User } = require("../../db");

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

    const existingOwner = await OwnerDraft.findOne({
      where: { Firstname: ownerData.Firstname, Mail: ownerData.Mail },
    });

    const owner = existingOwner || (await OwnerDraft.create(ownerData));
    const user = await User.findByPk(ownerData.UserID);

    if (!user || !owner) {
      throw new Error("Failed to create owner");
    }

    const financial = await FinancialDraft.create(financialData);
    if (!financial) {
      throw new Error("Failed to create financial");
    }

    const feature = await FeatureDraft.create(featureData);
    if (!feature) {
      throw new Error("Failed to create feature");
    }

    const draftProperty = await DraftProperty.create({
      ID_owner: owner.ID_ownerDraft,
      ID_Financials: financial.ID_FinancialDraft,
      ID_Features: feature.ID_FeatureDraft,
    });

    const propertyID = draftProperty.ID_PropertyDraft;
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
