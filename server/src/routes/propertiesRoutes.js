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
const { withdrawHandler } = require("../handlers/property/withdrawHandler.js");
const { editPropertyHandler } = require('../handlers/property/editPropertyHandler.js');
const { createDraftPropertyHandler } = require('../handlers/property/createDraftPropertyHandler.js');
const { editDraftPropertyHandler } = require('../handlers/property/editDraftPropertyHandler.js');
const { deleteDraftPropertyHandler } = require('../handlers/property/deleteDraftPropertyHandler.js');

const propertyRouter = Router();

propertyRouter.get("/", getAllPropertiesHandler);
propertyRouter.post("/", createPropertyHandler);
propertyRouter.get("/filter", getFilteredPropertiesHandler);
propertyRouter.post("/status", setPropertyStatusHandler);
propertyRouter.post("/withdraw", withdrawHandler);
propertyRouter.patch("/edit/:id", editPropertyHandler);
propertyRouter.post("/draft", createDraftPropertyHandler);
propertyRouter.patch("/draft/edit/:id", editDraftPropertyHandler);
propertyRouter.delete("/draft/delete/:id", deleteDraftPropertyHandler);

module.exports = propertyRouter;
