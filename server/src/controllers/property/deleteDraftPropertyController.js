const { DraftProperty, FeatureDraft, FinancialDraft } = require("../../db.js");

async function deleteDraftProperty(draftId) {
  await DraftProperty.destroy({
    where: { ID_PropertyDraft: draftId },
  });


}

module.exports = { deleteDraftProperty };
