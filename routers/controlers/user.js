const userModel = require("./../../db/models/user");
const bcrypt = require("bcrypt");
require("dotenv").config();
const SALT = Number(process.env.SALT);

const register = async (req, res) => {
  const { email, password, role } = req.body;
  const savedEmail = email.toLowerCase();
  const savedPassword = await bcrypt.hash(password, SALT);
  const newUser = new userModel({
    email: savedEmail,
    password: savedPassword,
    role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = { register };
