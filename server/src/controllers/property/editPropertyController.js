const { Feature } = require("../../db.js");

async function editProperty(propertyId, newInfo) {
  const { Type, Country, City, Address, State, Postal_Code, Description, Square_foot, Amenities, Rooms, Occupancy_Status, Link_Image, Link_Document, More } = newInfo;

  const feature = await Feature.findByPk(propertyId);
  if (!feature) {
    throw new Error("Property not found.");
  }

  const updatedFeature = {
    Type,
    Country,
    City,
    Address,
    State,
    Postal_Code,
    Description,
    Square_foot,
    Amenities,
    Rooms,
    Occupancy_Status,
    Link_Image,
    Link_Document,
    More,
  };

  await feature.update(updatedFeature);
}

module.exports = { editProperty };