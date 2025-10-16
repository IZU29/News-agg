const authenticate = async (req , res , next) => {
    console.log("Will perform Authentication middleware before Routes present")
    next()
}


module.exports = authenticate