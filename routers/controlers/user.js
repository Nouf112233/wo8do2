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

const login=(req,res)=>{
    const {email,password}=req.body;

    const savedEmail=email.toLowerCase();

    userModel
    .findOne({email: savedEmail})
    .then(async(result)=>{
        if(result)
        {
            if(result.email==email)
            {
                const hashedPass=await bcrypt.compare(password,result.password)
                if(hashedPass)
                {
                    res.status(200).json(result);
                }
            }
        }
    })
}

module.exports = { register };
