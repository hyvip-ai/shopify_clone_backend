const Banner = require("../models/BannerOverlay")
const Store = require("../models/store")
function addBanner(req,res){
    const params = req.body;

if(params.head && params.data && params.image && params.position){
    const store = req.params.store;
    Store.find({_id:store}).exec((err,mystore)=>{
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
                    return res.status(201).send({messege:"Banner Created",data:data})
                }
            })
           
        }
        else{
            return res.status(404).send({messege:"Store Doesn't Exists"});
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
    if(req.params.store && req.params.position){
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
                    
                        return res.status(404).send({messege:"no banner Present",data:data})
                    }
                })
            }
            else{
                return res.status(404).send({messege:"Store Not Found"});
            }
        })
    }
    else{
        return res.status(401).send({messege:"You Are not Authenticated enough"});

    }
}
function getAllBanner(req,res){
    if(req.params.store){
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
    else{
        return res.status(401).send({messege:"You Don't Haver a store Id"});
    }
}

function editBannerPosition(req,res){
    if(req.params.store && req.params.position){
    if(req.body.image && req.body.head && req.body.data){
        Store.find({_id:req.params.store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"})
            }
            else if(mystore.length>0){
                Banner.findOneAndUpdate({$and:[
                    {position:req.params.position},
                    {store:req.params.store}
                ]},{$set:{image:req.body.image,data:req.body.data,head:req.body.head}}).exec((err,data)=>{
                    if(err){
                        return res.status(500).send({messege:"Error Occured"});
                    }
                    else if(data){
                        return res.status(200).send({messege:"Data Updated",data:data})
                    }
                    else{
                        return res.status(400).send({messege:"Error Occured"})
                    }
                })
            }
            else{
                return res.status(400).send({messege:"Store Not Found"});
            }
        })
    }
    else{
        return res.status(400).send({messege:"Invalid Data"});
    }
    }
    else{
        return res.status(401).send({messege:"You Are not Authorized"});
    }
}

function deleteBanner(req,res){
    if(req.params.id && req.params.store){
        Store.find({_id:req.params.store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});
            }
            else if(mystore.length>0){
                Banner.findOneAndDelete({$and:[
                    {store:req.params.store},
                    {_id:req.params.id}
                ]}).exec((err,data)=>{
                    if(err){
                        return res.status(500).send({messege:"error Occured"});
                    }
                    else if(data){
                        return res.status(200).send({messege:"Banner Deleted"});
                    }
                    else{
                        return res.status(404).send({messege:"Banner Not Found"})
                    }
                })
            }
            else{
                return res.status(404).send({messege:"Store Not Found"})
            }
        })
    }
    else{
        return res.status(400).send({messege:"Invalid Data"});
    }
}

module.exports = {
    addBanner,
    getBanner,
    getAllBanner,
    changeBanner,
    editBannerPosition,
    deleteBanner
}