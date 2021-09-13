const express=require("express")
const ConnectDb = require("./config/connectDB")
const route = require("./routes/contact")
require("dotenv").config()

const app=express()
app.use(express.json())
ConnectDb()

app.use('/api/contacts',  route)
app.listen(process.env.port, ()=> console.log(` server is running on port ${process.env.port} `))