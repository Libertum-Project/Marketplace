const { User, Property, Transaction, Financial } = require("../../db.js");
const { mintToken } = require("../../smartcontracts/smartContractsFunctions");

async function updateUser(userId, saved, invested, quantity) {
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
      const userPrivateKey = user.privateKey;
      const property = await Property.findByPk(invested, {include: [Financial]});
      const propertyType = property.Financial.Investment_type;
      const propertyAddress = property.Address;

      await mintToken(userPrivateKey, propertyAddress, quantity, propertyType)

    await Transaction.create({
      "Token_quantity": quantity,
      "Payment_Method": "Metamask",
      "Payment_Currency": "USDT",
      "ID_User": userId,
      "ID_Property": invested
    });

      await user.addInvestedProperties(invested);
  
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
