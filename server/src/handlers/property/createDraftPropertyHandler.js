const {
  createDraftProperty,
} = require("../../controllers/property/createDraftPropertyController.js");

async function createDraftPropertyHandler(req, res) {
  const property = req.body;

  try {
    const createdDraftProperty = await createDraftProperty(property);

    res.status(202).send(createdDraftProperty);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { createDraftPropertyHandler };
