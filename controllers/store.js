const Store = require("../models/store")

function createStore(req,res){
    Store.find({name:req.body.name}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"})
        }
        else if(data.length>0){
            return res.status(400).send({messege:"This Store Already Exist"})
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

module.exports = {
    createStore
}