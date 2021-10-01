const Feature = require("../models/Feature")
function getAllFeature(req,res){
    Feature.find({}).exec((err,data)=>{
        if(err){
            return res.status(501).send({messege:"Error Occured"});
        }
        else{
            return res.send({messege:data})
        }
    })
}

function deleteFeature(req,res){
    const feature_id = req.params.id;
    Feature.findOneAndDelete({_id:feature_id}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else{
            return res.status(200).send({messege:"Deleted",data:data});
        }
    })
}

function postFeature(req,res){
    const params = req.body
    if(params.image && params.head && params.data){
        var feature = new Feature();
        feature.image = params.image;
        feature.head = params.head;
        feature.data = params.data;
        feature.save((err,savedData)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});

            }
            else{
                return res.status(201).send({messege:"Feature Added",data:savedData})
            }
        })
    }
    else{
        return res.status(400).send({messege:"Invalid Data"});
    }
}

module.exports = {
    getAllFeature,
    deleteFeature,
    postFeature
}



