const {
  deleteProperty,
} = require('../../controllers/property/deletePropertyController.js');

async function deletePropertyHandler(req, res) {
  try {
    const propertyId = req.params.id;
    await deleteProperty(propertyId);
    res.status(202).send('Property Deleted');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { deletePropertyHandler };
