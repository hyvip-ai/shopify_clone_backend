const Feature = require("../models/Feature")
const Store = require("../models/store")
function getAllFeature(req,res){
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


function postFeature(req,res){
    const params = req.body
    const store = req.params.store;
    Store.find({_id:store}).exec((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else if(mystore.length>0){
            if(params.image && params.head && params.data){
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
                return res.status(400).send({messege:"Invalid Data"});
            }
        }
        else{
            return res.status(404).send({messege:"Store Doesn't Exist"});
        }
    })
}

module.exports = {
    getAllFeature,
    postFeature
}



