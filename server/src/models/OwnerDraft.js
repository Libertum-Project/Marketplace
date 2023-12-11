const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "OwnerDraft",
    {
      ID_ownerDraft: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Firstname: {
        type: DataTypes.STRING(100),
      },
      Surname: {
        type: DataTypes.STRING(100),
      },
      Address: {
        type: DataTypes.STRING(100),
      },
      City: {
        type: DataTypes.STRING(50),
      },
      State: {
        type: DataTypes.STRING(50),
      },
      Country: {
        type: DataTypes.STRING(50),
      },
      Postal_Code: {
        type: DataTypes.STRING(10),
      },
      Mail: {
        type: DataTypes.STRING(100),
      },
      Phone_number: {
        type: DataTypes.STRING(20),
      },
      Code_area: {
        type: DataTypes.STRING(10),
      },
      Passport_ID: {
        type: DataTypes.STRING(20),
      },
      Date_of_birth: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "OwnerDraft",
      timestamps: false,
    }
  );
};
