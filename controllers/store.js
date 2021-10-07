const Store = require("../models/store")

function createStore(req,res){
    Store.find({name:req.body.name}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"})
        }
        else if(data.length>0){
            return res.status(400).send({messege:"This Store Already Exist try Editing The Store"})
        }
        else{
            var store = new Store();
            store.name = req.body.name;
            store.save((err,data)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"});
                }
                else{
                    return res.status(201).send({messege:"Store Created",data:data});
                }
            })
        }
    })
}


function editStore(req,res){
    Store.findOne({name:req.body.storeName}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else if(data){
            return res.status(200).send({messege:"Store Present Start Editing",data:data});
        }
        else{
            return res.status(400).send({messege:"Store Not Found"});
        }
    })
}
function getStoreName(req,res){
    Store.findOne({_id:req.params.store}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else{
            return res.status(200).send({messege:"Store Found",data:data})
        }
      
    })
}

function editStoreName(req,res){
    if(req.body.name){
        Store.findOneAndUpdate({_id:req.params.store},{$set:{name:req.body.name}}).exec((err,data)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});
            }
            else{
                return res.status(200).send({messege:"Store Name Updated",data:data})
            }
        })
    }
    else{
        return res.status(400).send({messege:"Inavlid Data"})
    }
}
module.exports = {
    createStore,
    editStore,
    getStoreName,
    editStoreName
}