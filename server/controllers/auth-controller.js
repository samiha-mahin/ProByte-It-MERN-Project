const User = require ("../models/user-model");
const bcrypt = require ("bcrypt");
const jwt = require ("jsonwebtoken");

const home = async (req,res) => {
    try {
      res 
        .status(200)
        .send ("Hello from router");
    } catch (error) {
        console.log(error);
    }
};
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email }); 

        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }
       const userCreated = await User.create({ username, email, phone, password});
        
        res.status(201).json({ 
            msg : "registration successful", 
            token : await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    } catch (error) {
        // res.status(500).json("Server error");
        next(error);
    }
};

const login = async (req,res) => {
    try {
        const {email, password} = req.body 
        const userExist = await User.findOne ({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid User" });
        }
        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);
        if (user) {
            res.status(200).json({ 
                msg : "login successful", 
                token : await userExist.generateToken(),
                userId: userExist._id.toString()
            }); 
        }else{
            res.status(401).json({ message: "Invalid email or password" })
        }
    } catch (error) {
        res.status(500).json("Server error");  
    }
}

//to send user data-user logic
const user = async (req,res)=>{
  try {
     const userData = req.user;
     console.log(userData);
     return res.status(200).json ({userData});
  } catch (error) {
    console.log(`error from theb user route ${user}`);
  }
}


module.exports = { home , register , login, user};