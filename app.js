require('dotenv').config()

const Express = require('express')
const app = Express()
const UserRouter = require("./routes/user")
const NewsRouter = require("./routes/news")
const AuthMiddleware = require("./middleware/auth")
const ConnectDB = require("./db/connect")

app.use(Express.json())
app.use('/api/user' , UserRouter)
app.use('/api/news' , NewsRouter)
// AuthMiddleware
app.listen(3000 , ()=>{
    try{
    // ConnectDB(process.env.MONGO_URI)
    console.log(`Server Is Listening on Port ${3000}`)
}
catch(error){
    console.log(error)
}
})