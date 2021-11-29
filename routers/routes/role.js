const express = require("express");
const { addRole, getRoles } = require("./../controlers/role");
const roleRouter = express.Router();

roleRouter.post("/", addRole);
roleRouter.get("/", getRoles);

module.exports = roleRouter;
