const {
  deleteDraftProperty,
} = require("../../controllers/property/deleteDraftPropertyController.js");

async function deleteDraftPropertyHandler(req, res) {
  try {
    const draftId = req.params.id;
    await deleteDraftProperty(draftId);
    res.status(202).send("Property Draft Deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { deleteDraftPropertyHandler };
