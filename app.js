require('dotenv').config()

const Express = require('express')
const app = Express()
const UserRouter = require("./routes/auth")
const NewsRouter = require("./routes/news")
const AuthMiddleware = require("./middleware/auth")
const ConnectDB = require("./db/connect")

app.use(Express.json())
app.use('/api/' , UserRouter)
app.use('/api/news' ,AuthMiddleware, NewsRouter)
// app.use('/api/news' , NewsRouter)
app.listen(3000 , ()=>{
    try{
    ConnectDB(process.env.MONGO_URI)
    console.log(`Server Is Listening on Port ${3000}`)
}
catch(error){
    console.log(error)
}
})