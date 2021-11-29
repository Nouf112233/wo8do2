const express = require("express");
const { register} = require("./../controlers/user");
const userRouter = express.Router();

userRouter.post("/register", register);

module.exports = userRouter;