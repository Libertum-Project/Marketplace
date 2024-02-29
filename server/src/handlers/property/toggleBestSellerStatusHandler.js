const {
  toggleBestSellerStatus,
} = require("../../controllers/property/toggleBestSellerStatusController.js");

async function toggleBestSellerStatusHandler(req, res) {
  const propertyId = req.params.id;
  try {
    await toggleBestSellerStatus(propertyId );

    res.status(202).send('Property Edited');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { toggleBestSellerStatusHandler};
