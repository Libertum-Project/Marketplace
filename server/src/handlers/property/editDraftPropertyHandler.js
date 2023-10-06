const {
  editDraftProperty,
} = require("../../controllers/property/editDraftPropertyController.js");

async function editDraftPropertyHandler(req, res) {
  const draftId = req.params.id;
  const newInfo = req.body;
  try {
    await editDraftProperty(draftId, newInfo);

    res.status(202).send('Property Edited');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { editDraftPropertyHandler };
