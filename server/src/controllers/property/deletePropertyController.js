const { Property } = require('../../db.js');

async function deleteProperty(propertyId) {
  await Property.destroy({
    where: { ID_Property: propertyId },
  });
}

module.exports = { deleteProperty };
