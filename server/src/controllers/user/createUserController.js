const {
  User,
  Property,
  Transaction,
  Owner,
  Financial,
  Feature,
} = require("../../db");

const { privateKeys } = require("../../privateKey");

async function createUser(email, name) {
  try {
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { name },
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

    const id = user.ID_user;
    user.privateKey = privateKeys[id -1];
    await user.save();
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create the user in the database.");
  }
}

module.exports = { createUser };
