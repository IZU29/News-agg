require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AppError = require('../utils/AppError')

const register = async (req , res) => {
    // console.log()
    try {
    const {username , email , password , preferences} = req.body
    if(!email || !password || !username){
        throw new AppError("Sign in credentials are incomplete" , 400);
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password , salt)
    const newUser = {...req.body , password : hashPassword}
    const user = await User.create({ ...newUser })
    const token = jwt.sign({ userId : user._id ,  name : user.username  , categories : user.preferences.Categories} , process.env.JWT_SECRET , { expiresIn : '30d'})
    // if(!)
    // console.log('Hmmm...')
    // res.send("Registering User Here !!!")
    res.status(200).json({name : user.username , token})
}
catch(error){
     throw new AppError("Something went wrong with the Register ,  401")
}
    // console.log(req.body)
}

const login = async (req , res) => {
    try {
    const {email , password} = req.body
    // if()
    // console.log()
    const user = await User.findOne({ email })
    const bcryptBool = await bcrypt.compare(password , user.password)
    if(!bcryptBool){
        res.status(401).json({msg : "Incorrect Password was Input !!!"})
    }
    const token = jwt.sign({ userId : user._id ,  name : user.username } , process.env.JWT_SECRET , { expiresIn : '30d'})
    res.status(200).json({name : user.username , token})
}
catch(error){
    res.status(500).json({msg : "Something Went Wrong Try Again !!!"})
}
}



module.exports = {
    register , login
}