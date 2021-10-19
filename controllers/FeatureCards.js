const FeatureCrads = require("../models/Feature-cards");
const Store = require("../models/store")
function addCards(req,res){
 if(req.params.store){
    const params = req.body;
    const store = req.params.store;
    if(params.title && params.image &&params.data){
        Store.find({_id:store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});
            }
            else if(mystore.length>0){
                
                    var featureCard = new FeatureCrads();
                    featureCard.image = params.image;
                    featureCard.title = params.title;
                    featureCard.store = store
                    featureCard.data = params.data
                    featureCard.save((err,data)=>{
                        if(err){
                            return res.status(500).send({messege:"Error While Saving Data"});
                        }
                        else{
                            return res.status(201).send({messege:"Colleaction Added",data:data});
            
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
 else{
     return res.status(401).send({messege:"You are not authorized"})
 }

}

function getCards(req,res){
    if(req.params.store){
        const store = req.params.store;
        Store.find({_id:store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"})
            }
            else if(mystore.length>0){
                FeatureCrads.find({store:store}).exec((err,cards)=>{
                    if(err){
                        return res.status(500).send({messege:"Error Occured"});
                    }
                    else if(cards.length>0){
                        return res.status(200).send({messege:"Collection Found",data:cards})
                    }
                    else{
                        return res.status(404).send({messege:"Collection Not Found",data:cards})
                    }
                })
            }
            else{
                return res.status(404).send({messege:"Store Not Found"});
            }
        })
    }
    else{
        return res.status(401).send({messege:"You are not authorized"})

    }
}


module.exports = {
    addCards,
    getCards
}
