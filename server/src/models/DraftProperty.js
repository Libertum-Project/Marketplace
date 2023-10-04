const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "DraftProperty",
    {
      ID_PropertyDraft: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ID_owner: {
        type: DataTypes.INTEGER,
        references: {
          model: "OwnerDraft",
          key: "ID_ownerDraft",
        },
      },
      ID_Financials: {
        type: DataTypes.INTEGER,
        references: {
          model: "FinancialDraft",
          key: "ID_FinancialDraft",
        },
      },
      ID_Features: {
        type: DataTypes.INTEGER,
        references: {
          model: "FeatureDraft",
          key: "ID_FeatureDraft",
        },
      },
    },
    {
      tableName: "DraftProperty",
      timestamps: false,
    }
  );
};
