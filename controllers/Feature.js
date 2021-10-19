const Feature = require("../models/Feature")
const Store = require("../models/store")
function getAllFeature(req,res){
    if(req.params.store){
        const store = req.params.store;

        Store.find({_id:store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});
            }
            else if(mystore.length>0){
                Feature.find({store:store}).exec((err,data)=>{
                    if(err){
                        return res.status(501).send({messege:"Error Occured"});
                    }
                    else if(data.length>0){
                        return res.send({messege:"Feature Found",data:data})
                    }
                    else{
                        return res.status(404).send({messege:"Features Not Found",data:data})
                    }
                })
            }
            else{
                return res.status(404).send({messege:"Store Not Found"});
            }
        })
    }
    else{
        return res.status(401).send({messege:"YOu Are Not Authenticated Enough"});
    }
}


function postFeature(req,res){
    if(req.params.store){
        const params = req.body
        const store = req.params.store;
        if(params.image && params.head && params.data){
            Store.find({_id:store}).exec((err,mystore)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"});
                }
                else if(mystore.length>0){
                  
                        var feature = new Feature();
                        feature.image = params.image;
                        feature.head = params.head;
                        feature.data = params.data;
                        feature.store = store;
                        feature.save((err,savedData)=>{
                            if(err){
                                return res.status(500).send({messege:"Error Occured"});
                
                            }
                            else{
                                return res.status(201).send({messege:"Famous Product Added",data:savedData})
                            }
                        })
                   
                }
                else{
                    return res.status(404).send({messege:"Store Doesn't Exist"});
                }
            })
        }
        else{
            return res.status(400).send({messege:"Invalid Data"});
        }
    }
    else{
        return res.status(401).send({messege:"User Not AUthenticated"});
    }

}
function deleteFeatures(req,res){
    if(req.params.store && req.params.id){
        Store.find({_id:req.params.store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});
            }
            else if(mystore.length>0){
                Feature.findOneAndDelete({_id:req.params.id}).exec((err,data)=>{
                    if(err){
                        return res.status(500).send({messege:"Error Occured"})
                    }
                    else if(data){
                        return res.status(200).send({messege:"Deleted SuccessFully"});
                    }
                    else{
                        return res.status(400).send({messege:"Feature Not Found"});
                    }
                })
            }
            else{
                return res.status(404).send({messege:"Store Not Found"});
            }
        })
    }
    else{
        return res.status(400).send({messege:"Invalid Data"});
    }
}

module.exports = {
    getAllFeature,
    postFeature,
    deleteFeatures
}



