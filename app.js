const Express = require('express')
const app = Express()
const UserRouter = require("./routes/user")
const ConnectDB = require("./db/connect")


app.use('/api' , UserRouter)


app.listen(3000 , ()=>{
    ConnectDB()
    console.log(`Server Is Listening on Port ${3000}`)
})