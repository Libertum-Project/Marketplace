const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      ID_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      phoneNumber: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      codeArea: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      passportId: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      dateOfBirth: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      editableName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      }
    },
    {
      tableName: "User",
      timestamps: false,
    }
  );
};
