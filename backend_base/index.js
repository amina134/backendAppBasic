const express=require("express")
const app=express()
require("dotenv").config()
const port =process.env.port

const connectBb=require("./config/connectDb")
const advert =require("./model/advert")
const advertRoute = require("./routes/advertRoutes")


app.use(express.json())

connectBb()

app.use('/advert',advertRoute)



app.listen(port,()=>{
    console.log(`server running at ${port}`)
})