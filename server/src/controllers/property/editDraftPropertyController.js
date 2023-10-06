const {
  DraftProperty,
  FeatureDraft,
  FinancialDraft,
} = require("../../db.js");

async function editDraftProperty(draftId, newInfo) {
  const { featureData, financialData } = newInfo;

  const draft = await DraftProperty.findByPk(draftId);
  const feature = await FeatureDraft.findByPk(draft.ID_Features);
  const financial = await FinancialDraft.findByPk(draft.ID_Financials);

  await feature.update(featureData);
  await financial.update(financialData);
}

module.exports = { editDraftProperty };
