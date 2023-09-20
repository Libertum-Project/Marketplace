const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Feature",
    {
      ID_Feature: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Type: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Country: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      City: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Address: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      State: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Postal_Code: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      Square_foot: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Amenities: {
        type: DataTypes.ARRAY(DataTypes.STRING(100)),
        allowNull: false,
      },
      Rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Occupancy_Status: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      Link_Image: {
        type: DataTypes.ARRAY(DataTypes.STRING(100)),
        allowNull: false,
      },
      Link_Document: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      More: {
        type: DataTypes.STRING(500),
      },
    },
    {
      tableName: "Feature",
      timestamps: false,
    }
  );
};
