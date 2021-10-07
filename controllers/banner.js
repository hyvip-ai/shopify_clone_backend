const Banner = require("../models/BannerOverlay")
const Store = require("../models/store")
function addBanner(req,res){
    const store = req.params.store;
    Store.findOne({_id:store}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occuerd"});
        }
        else if(data){
            var banner = new Banner();
            const params = req.body;
            banner.head = params.head;
            banner.data = params.data;
            banner.image = params.image;
            banner.position = params.position;
            banner.store = store;
            banner.save((err,data)=>{
                if(err){
            return res.status(500).send({messege:"Error Occuerd"});

                }
                else{
                    return res.status(201).send({messege:"Banner Craeted",data:data})
                }
            }) 
        }
        else{
            return res.status(400).send({messege:"Store Doesn't Exists"});
        }
    })
}

function changeBanner(req,res){
    var store= req.params.store;
    var position = req.params.position
    Banner.findOneAndUpdate({$and:[
        {store:store},
        {position:position}
    ]},{$set:{image:req.body.image,head:req.body.head,data:req.head.data}}).exec((err,data)=>{
        if(err){
        return res.status(500).send({messege:"Error Occured"});

        }

        else{
            return res.status().send({messege:"Data Updated",data:data})
        }
    })
}

function getBanner(req,res){
    var store= req.params.store;
    var position = req.params.position
    Banner.find({$and:[
        {store:store},
        {position:position}
    ]}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else if(data.length>0){
            return res.status(200).send({messege:"Banner Data detected",data:data});
        }
        else{
            return res.status(200).send({messege:"no banner Present",data:data})
        }
    })
}
function getAllBanner(req,res){
    Banner.find({store:req.params.store}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});

        }
        else{
            return res.status(200).send({messege:"Banner Avaialble",data:data});

        }
    })
}

module.exports = {
    addBanner,
    getBanner,
    getAllBanner,
    changeBanner
}