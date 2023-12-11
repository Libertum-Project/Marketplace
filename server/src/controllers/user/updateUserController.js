const { User, Property, Transaction, Financial } = require("../../db.js");

async function updateUser(
  userId,
  saved,
  unsave,
  invested,
  quantity,
  pricePerToken,
  totalPrice
) {
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
    } else if (unsave) {
      const propertyToUnsave = await Property.findByPk(unsave);

      if (!propertyToUnsave) {
        throw new Error("Property to unsave not found.");
      }

      await user.removeSavedProperties(propertyToUnsave);
    } else if (invested) {
      await Transaction.create({
        Token_quantity: quantity,
        TotalPrice: totalPrice,
        PricePerToken: pricePerToken,
        Payment_Method: "Metamask",
        Payment_Currency: "USDT",
        ID_User: userId,
        ID_Property: invested,
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
