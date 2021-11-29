const roleModel = require("./../../db/models/role");

const addRole = (req, res) => {
  const { role, permissions } = req.body;
  const newRole = new roleModel({
    role,
    email,
    permissions,
  });
  newRole
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { addRole };
