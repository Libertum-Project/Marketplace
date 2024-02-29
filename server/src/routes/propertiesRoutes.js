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
const { withdrawHandler } = require("../handlers/property/withdrawHandler.js");
const { editPropertyHandler } = require('../handlers/property/editPropertyHandler.js');
const { createDraftPropertyHandler } = require('../handlers/property/createDraftPropertyHandler.js');
const { editDraftPropertyHandler } = require('../handlers/property/editDraftPropertyHandler.js');
const { deleteDraftPropertyHandler } = require('../handlers/property/deleteDraftPropertyHandler.js');
const { deletePropertyHandler } = require('../handlers/property/deletePropertyHandler.js');
const {toggleBestSellerStatusHandler} = require('../handlers/property/toggleBestSellerStatusHandler.js')


const propertyRouter = Router();
propertyRouter.get("/", getAllPropertiesHandler);
propertyRouter.get("/filter", getFilteredPropertiesHandler);

propertyRouter.post("/", createPropertyHandler);
propertyRouter.delete("/:id", deletePropertyHandler);

propertyRouter.patch("/edit/:id", editPropertyHandler);
propertyRouter.patch("/best-sellers/:id", toggleBestSellerStatusHandler);
propertyRouter.patch("/best-sellers/:id", toggleBestSellerStatusHandler);

propertyRouter.post("/draft", createDraftPropertyHandler);
propertyRouter.patch("/draft/edit/:id", editDraftPropertyHandler);
propertyRouter.delete("/draft/delete/:id", deleteDraftPropertyHandler);

propertyRouter.post("/withdraw", withdrawHandler);

module.exports = propertyRouter;
