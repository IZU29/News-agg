require('dotenv').config()

const jwt = require("jsonwebtoken")

const authenticate = async (req , res , next) => {
    try{
    const headers = req.headers.authorization
    if (!headers || !headers.startsWith('Bearer ')){
        // console.log(headers)
        res.status(401).json({ msg : "Unuthenticated Token !!!"})
    }
    const token = headers.split(' ')[1]
    const decoded = await jwt.verify(token , process.env.JWT_SECRET)
    req.user = decoded
    next()
}
    catch(error){
        
        res.send("Error Occured During the Authrntication Of User")
}
}


module.exports = authenticate