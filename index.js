const express = require("express")
const dotenv  = require('dotenv').config()
const routes = require("./routes/routes")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 4001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("Homeopage working successfully")
})

app.use('/api',routes)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database connected successfully")
   app.listen(port,()=>{
    console.log(`app is listening at http://localhost:${port}`) 
})})

.catch((error)=>{
    console.log(error)
})




