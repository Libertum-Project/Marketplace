const {
  editUserInfo,
} = require("../../controllers/user/editUserInfoController.js");

async function editUserInfoHandler(req, res) {
  const userId = req.params.userId;
  const { editableName, lastName, country, city, address, phoneNumber } = req.body;
  try {
    await editUserInfo(userId, editableName, lastName, country, city, address, phoneNumber);

    res.status(202).send('User Edited');
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}

module.exports = { editUserInfoHandler };
