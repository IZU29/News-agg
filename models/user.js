const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true , "Please Provide Username"]
    },
    email : {
        type : String,
        required : [true , "Please Provide Email"]
    },
    password : {
        type : String,
        required : [true , "Please Provide Password"]
    },
    prefrences : {
        sources : [String],
        Categories : [String]
    },

    savedArticles:[]

})

module.exports = new mongoose.model('User'  , UserSchema)