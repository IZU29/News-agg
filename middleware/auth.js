require('dotenv').config()
const AppError = require("../utils/AppError");

const jwt = require("jsonwebtoken")

const authenticate = async (req , res , next) => {
    try{
    const headers = req.headers.authorization

    if (!headers || !headers.startsWith('Bearer ')){
        // No token provided
        throw new AppError("There is no web token provided", 401);
    }
    const token = headers.split(' ')[1]
    const decoded = await jwt.verify(token , process.env.JWT_SECRET)
    req.user = decoded
    next()
}
    catch(error){
       // Error occured with JWT
       throw new AppError("Invalid webtoken ", 401);
}
}


module.exports = authenticate