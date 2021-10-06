require("dotenv").config()
const cors = require('cors')
const express = require('express')
const app = express();
const port = process.env.PORT || "mongodb://localhost:27017/testingmongo";
const mongo = process.env.URI || 3000
const bodyParser = require('body-parser')
const defaultRouter = require("./routes/deafult")
const storeRouter = require("./routes/store")
const bannerRoutes = require("./routes/banner")
app.use(bodyParser.json())
app.use(cors())
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

app.use("/",defaultRouter);
app.use("/api",storeRouter);
app.use("/api",bannerRoutes);