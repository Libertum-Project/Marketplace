const {
  editProperty,
} = require("../../controllers/property/editPropertyController.js");

async function editPropertyHandler(req, res) {
  const propertyId = req.params.id;
  const newInfo = req.body;
  try {
    await editProperty(propertyId, newInfo);

    res.status(202).send('Property Edited');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { editPropertyHandler };