const FeatureCrads = require("../models/Feature-cards");
function addCards(req,res){
    const params = req.body;
    if(params.title && params.image &&params.data){
        var featureCard = new FeatureCrads();
        featureCard.image = params.image;
        featureCard.title = params.title;
      
        featureCard.data = params.data
        featureCard.save((err,data)=>{
            if(err){
                return res.status(500).send({messege:"Error While Saving Data"});
            }
            else{
                return res.status(201).send({messege:"featureCard Added",data:data});

            }
        })
    }
    else{
        return res.status(400).send({messege:"Invalid Data"});
    }
}
function deleteCards(req,res){
    const card_id = req.params.id;
    FeatureCrads.findOneAndDelete({_id:card_id}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else{
            return res.status(200).send({messege:"Deleted",data:data})
        }
    })
}

function getCards(req,res){
    FeatureCrads.find({}).exec((err,cards)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else{
            return res.status(200).send({messege:cards})
        }
    })
}


module.exports = {
    addCards,
    deleteCards,
    getCards
}
