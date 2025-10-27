const jwt = require("jsonwebtoken")

const authenticate = async (req , res , next) => {
    // const headers = req.headers.authorization
    // if (headers || headers.startsWith('Bearer ')){
    //     console.log("Will perform Authentication middleware before Routes present")
    //     next()
    // }
    console.log("Error !!!")
}


module.exports = authenticate