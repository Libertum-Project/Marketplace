const { Router } = require("express");

const { getAllUsersHandler } = require("../handlers/user/getAllUsersHandler.js");
const {
  getPropertiesUserHandler,
} = require("../handlers/user/getPropertiesUserHandler.js");
const { createUserHandler } = require("../handlers/user/createUserHandler.js");
const { updateUserHandler } = require("../handlers/user/updateUserHandler.js");
const { editUserInfoHandler } = require("../handlers/user/editUserInfoHandler.js");

const userRouter = Router();

userRouter.post("/", createUserHandler);
userRouter.get("/", getAllUsersHandler);
userRouter.post("/update", updateUserHandler);
userRouter.patch("/edit/:userId", editUserInfoHandler);
userRouter.get("/:userId/type", getPropertiesUserHandler);

module.exports = userRouter;
