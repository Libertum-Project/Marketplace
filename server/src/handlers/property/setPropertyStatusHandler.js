const { setPropertyStatus } = require('../../controllers/property/setPropertyStatusController.js');

async function setPropertyStatusHandler(req, res) {
  try {
    const { propertyId, isActive } = req.body;
    await setPropertyStatus(propertyId, isActive);

    res.status(200).send('Ok')
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { setPropertyStatusHandler }
