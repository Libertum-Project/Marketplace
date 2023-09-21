const { User } = require("../../db.js");

async function editUserInfo(userId, editableName, lastName, country, state, city, address, postalCode, codeArea, phoneNumber, passportId, dateOfBirth) {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new Error("User not found.");
  }

  const updatedUserData = {
    editableName: editableName,
    lastName: lastName,
    state: state,
    country: country,
    city: city,
    address: address,
    postalCode: postalCode,
    codeArea: codeArea,
    phoneNumber: phoneNumber,
    passportId: passportId,
    dateOfBirth: dateOfBirth,
  };

  await user.update(updatedUserData);
}

module.exports = { editUserInfo };