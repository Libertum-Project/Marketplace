const { User } = require("../../db.js");

async function editUserInfo(userId, editableName, lastName, country, city, address, codeArea, phoneNumber) {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found.");
  }

  const updatedUserData = {
    editableName: editableName,
    lastName: lastName,
    country: country,
    city: city,
    address: address,
    codeArea: codeArea,
    phoneNumber: phoneNumber
  };

  await user.update(updatedUserData);
}

module.exports = { editUserInfo };