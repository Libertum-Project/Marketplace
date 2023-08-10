require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const host = process.env.HOST;
const port = process.env.PORT;
const database = process.env.DATABASE;
const username = "envwiseAzureDB@libertum--db";
const password = process.env.PASSWORD;



const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
  native: false,
});

/*
const sequelize = new Sequelize('libertum', 'postgres', 'contra445', {
  host: 'localhost',
  port: 5432,
  dialect: "postgres",
  logging: false,
  native: false,
});
*/

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Property, Owner, Feature, Financial, User, Transaction } =
  sequelize.models;

Property.hasOne(Owner, { foreignKey: "ID_owner" });
Owner.belongsTo(Property, { foreignKey: "ID_owner" });

Property.hasOne(Financial, { foreignKey: "ID_Financial" });
Financial.belongsTo(Property, { foreignKey: "ID_Financial" });

Property.hasOne(Feature, { foreignKey: "ID_Feature" });
Feature.belongsTo(Property, { foreignKey: "ID_Feature" });

User.hasMany(Property, {
  as: "savedProperties",
  foreignKey: "savedBy",
});
User.hasMany(Property, {
  as: "publishedProperties",
  foreignKey: "publishedBy",
});
User.hasMany(Property, {
  as: "investedProperties",
  foreignKey: "investedBy",
});

User.hasMany(Transaction, {
  foreignKey: "ID_User",
  as: "transactions",
});

Transaction.belongsTo(User, {
  foreignKey: "ID_User",
  as: "user",
});

Transaction.belongsTo(Property, {
  foreignKey: "ID_Property",
  as: "property",
});

Property.hasMany(Transaction, {
  foreignKey: "ID_Property",
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
