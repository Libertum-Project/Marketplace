const { User, Property, Owner, Feature, Financial } = require("../../db.js");
const { mintToken } = require("../../smartcontracts/smartContractsFunctions");

async function updateUser(userId, saved, invested, published, quantity) {
  try {
    const user = await User.findByPk(userId, {
      include: [
        { model: Property, as: "savedProperties" },
        { model: Property, as: "publishedProperties" },
        { model: Property, as: "investedProperties" },
      ],
    });

    if (!user) {
      throw new Error("User not found.");
    }

    if (saved) {
      await user.addSavedProperties(saved);
    } else if (invested) {
      await user.addInvestedProperties(invested);
      const userPrivateKey = user.privateKey;
      const property = await Property.findByPk(invested, {include: [Financial]});
      const propertyType = property.dataValues.Financial.dataValues.Investment_type;
      const propertyAddress = property.Address;

      await mintToken(userPrivateKey, propertyAddress, quantity, propertyType)
    } else if (published) {
      await user.addPublishedProperties(published);
    } else {
      throw new Error(
        "Invalid property type. Please specify 'saved', 'invested', or 'published'."
      );
    }

    return user;
  } catch (error) {
    throw new Error("Failed to create property for the user.");
  }
}

module.exports = { updateUser };
