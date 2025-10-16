require('dotenv').config()

const Express = require('express')
const app = Express()
const UserRouter = require("./routes/user")
const ConnectDB = require("./db/connect")

app.use(Express.json())
app.use('/api' , UserRouter)


app.listen(3000 , ()=>{
    ConnectDB(process.env.MONGO_URI)
    console.log(`Server Is Listening on Port ${3000}`)
})