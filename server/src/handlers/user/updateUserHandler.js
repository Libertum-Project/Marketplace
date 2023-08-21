const {
  updateUser,
} = require("../../controllers/user/updateUserController.js");

async function updateUserHandler(req, res) {
  const { userId, saved, invested } = req.query;
  const { quantity } = req.body;
  try {
    const updatedUser = await updateUser(userId, saved, invested, quantity);

    res.status(202).send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { updateUserHandler };
