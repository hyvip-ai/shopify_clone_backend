require("dotenv").config()
const cors = require('cors')
const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const mongo = process.env.URI || "mongodb://localhost:27017/testingmongo"
const bodyParser = require('body-parser')
const defaultRouter = require("./routes/deafult")
const storeRouter = require("./routes/store")
const bannerRoutes = require("./routes/banner")
const featureImagesRoutes = require("./routes/Featrured-image")
const testimonialsRoutes = require("./routes/testimonails")
const productRoutes = require("./routes/product")
const featureRoutes =require("./routes/Feature")
const collectionRoutes = require("./routes/collection")
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
app.use("/api",featureImagesRoutes);
app.use("/api",testimonialsRoutes)
app.use("/api",productRoutes)
app.use("/api",featureRoutes)
app.use("/api",collectionRoutes)