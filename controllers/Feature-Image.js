const FeatureImage = require("../models/feature-images")
const Store = require("../models/store")
function addImage(req,res){
    const store = req.params.store
    console.log(req.body)
    if(req.body.image){
        Store.find({_id:store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occuerd"});

            }
            else if(mystore.length>0){
                var featureimage = new FeatureImage();
                featureimage.image = req.body.image;
                featureimage.store = store;
                featureimage.save((err,data)=>{
                    if(err){
                        return res.status(500).send({messege:"Error Occured"});
                    }
                    else{
                        return res.status(201).send({messege:"New Image Saved",data:data});
                    }
                })
            }
            else{
                return res.status(400).send({messege:"Store Doesn't Exists"});

            }
        })
    }
    else{
        res.status(400).send({messege:"Invalid Data"})
}

}

function getImages(req,res){
    const store = req.params.store;
    Store.find({_id:store}).exec((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Ocuured"})
        }
        else if(mystore.length>0){
            FeatureImage.find({store:store}).exec((err,data)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"});
                }
                else if(data.length>0){
                    return res.status(200).send({messege:"Images Found",data:data});
                }
                else{
                    return res.status(404).send({messege:"Images Not Found",data:data});
        
                }
            
            })
        }
        else{
            return res.status(404).send({messege:"Store Not Found"})
        }
    })
}

module.exports = {
    getImages,
    addImage
}