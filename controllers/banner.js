const Banner = require("../models/BannerOverlay")
const Store = require("../models/store")
function addBanner(req,res){
    const params = req.body;

if(params.head && params.data && params.image && params.position){
    const store = req.params.store;
    Store.findOne({_id:store}).exec((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Occuerd"});
        }
        else if(mystore.length>0){
            var banner = new Banner();
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
else{
    return res.status(400).send({messege:"Invalid data"});
}
}

function changeBanner(req,res){
    var store= req.params.store;
    var position = req.body.position
    const params = req.body;
    if(params.head && params.data && params.image && params.position){
        Store.find({_id:store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});
            }
            else if(mystore.length>0){
               
                    Banner.findOneAndUpdate({$and:[
                        {store:store},
                        {position:position}
                    ]},{$set:{image:req.body.image,head:req.body.head,data:req.body.data}}).exec((err,data)=>{
                        if(err){
                        return res.status(500).send({messege:"Error Occured"});
                
                        }
                
                        else{
                            return res.status(202).send({messege:"Banner Updated",data:data})
                        }
                    })
                
            }
            else{
                return res.status(404).send({messege:"Store Not Found"});
            }
        })
    }
    else{
        return res.status(400).send({messege:"Invaid Data"});
    }

}

function getBanner(req,res){
    var store= req.params.store;
    var position = req.params.position
    Store.find({_id:store}).exec((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else if(mystore.length>0){
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
                console.log(data);
                    return res.status(404).send({messege:"no banner Present",data:data})
                }
            })
        }
        else{
            return res.status(404).send({messege:"Store Not Found"});
        }
    })
}
function getAllBanner(req,res){
    Store.find({_id:req.params.store}).exec((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});

        }
        else if(mystore.length>0){
            Banner.find({store:req.params.store}).exec((err,data)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"});
        
                }
                else if(data.length>0){
                    return res.status(200).send({messege:"Banner Avaialble",data:data});
        
                }
                else{
                    return res.status(404).send({messege:"No Banner Present"});
                }
            })
        }
        else{
            return res.status(404).send({messege:"Store Doesn't Exist"});
        }
    })
}

module.exports = {
    addBanner,
    getBanner,
    getAllBanner,
    changeBanner
}