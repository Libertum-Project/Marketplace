const {
  User,
  Property,
  Transaction,
  Owner,
  Financial,
  Feature,
} = require("../../db");

async function createUser(email, name) {
  try {
    const [user, created] = await User.findOrCreate({
      where: {
        email: email,
        name: name,
      },
      defaults: {
        name: name,
        editableName: name
      },
      include: [
        {
          model: Property,
          as: "savedProperties",
          include: [Owner, Financial, Feature],
        },
        {
          model: Property,
          as: "publishedProperties",
          include: [Owner, Financial, Feature],
        },
        {
          model: Property,
          as: "investedProperties",
          include: [Owner, Financial, Feature],
        },
        {
          model: Transaction,
          as: "transactions",
        },
      ],
    });

    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create the user in the database.");
  }
}

module.exports = { createUser };