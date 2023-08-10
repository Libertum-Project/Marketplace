const {
  User,
  Property,
  Transaction,
  Owner,
  Feature,
  Financial,
} = require("../../db.js");

async function getAllUsers() {
  try {
    const allUsers = await User.findAll({
      include: [
        {
          model: Property,
          as: "savedProperties",
          include: [Owner, Feature, Financial],
        },
        {
          model: Property,
          as: "publishedProperties",
          include: [Owner, Feature, Financial],
        },
        {
          model: Property,
          as: "investedProperties",
          include: [Owner, Feature, Financial],
        },

        {
          model: Transaction,
          as: "transactions",
        },
      ],
    });

    return allUsers;
  } catch (error) {
    throw new Error(
      "Failed to fetch all users and their properties from the database."
    );
  }
}

module.exports = { getAllUsers };
