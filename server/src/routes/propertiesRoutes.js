const { Router } = require("express");
const {
  createPropertyHandler,
} = require("../handlers/property/createPropertyHandler.js");
const {
  getAllPropertiesHandler,
} = require("../handlers/property/getAllPropertiesHandler.js");
const {
  getFilteredPropertiesHandler,
} = require("../handlers/property/getFilteredPropertiesHandler.js");
const {
  setPropertyStatusHandler,
} = require("../handlers/property/setPropertyStatusHandler.js");

const {
  claimMonthlyPaymentHandler,
} = require("../handlers/property/claimMonthlyPaymentHandler");

const propertyRouter = Router();

propertyRouter.get("/", getAllPropertiesHandler);
propertyRouter.post("/", createPropertyHandler);
propertyRouter.get("/filter", getFilteredPropertiesHandler);
propertyRouter.post("/status", setPropertyStatusHandler);
propertyRouter.post("/claim", claimMonthlyPaymentHandler);

module.exports = propertyRouter;
