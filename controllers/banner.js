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
        else{
            return res.status(200).send({messege:"Banner Data detected",data:data});
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
    getAllBanner
}