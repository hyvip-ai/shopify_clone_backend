require("dotenv").config()
const express = require('express')
const app = express();
const port = process.env.PORT;
const mongo = process.env.URI
const bodyParser = require('body-parser')
const defaultRouter = require("./routes/deafult")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect(mongo , { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>{
    app.listen(port,()=>{
        console.log('> Connected...'.underline.cyan)
        console.log('> Write Some Code...'.underline.cyan)
    })    
})
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red ))

app.use("/",defaultRouter)