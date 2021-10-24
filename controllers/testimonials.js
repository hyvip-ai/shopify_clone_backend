const Testimonails = require("../models/Testimonails");
const Store = require("../models/store")
function addtetsimonials(req,res){
    const params = req.body;
    
    if(params.data && params.name && params.designation){
        const store = req.params.store
        Store.find({_id:store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occuerd"});

            }
            else if(mystore.length>0){
                var testimonial =new Testimonails();
                testimonial.data = params.data;
                testimonial.name = params.name;
                testimonial.designation = params.designation;
                testimonial.image = params.image
                testimonial.store = store
                testimonial.save((err,dataSaved)=>{
                    if(err){
                        return res.status(500).send({messege:"Error Occured"})
                    }
                    else{
                        return res.status(201).send({messege:"Testimonial Saved",data:dataSaved});
                    }
                })
            }
            else{
                return res.status(404).send({messege:"Store Doesn't Exists"});

            }
        })
    }
    else{
        return res.status(400).send({messege:"Invalid Data"})
    }
}


function gettestimonials(req,res){
    const store= req.params.store
    Store.find({_id:store}).exec((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else if(mystore.length>0){
            Testimonails.find({store:store}).exec((err,data)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"});
                }
                else if(data.length>0){
                    return res.status(200).send({messege:"Testimonials Found",data:data});
                }
                else{
                    return res.status(404).send({messege:"Testimonials Not Found",data:data})
                }
            })
        }
        else{
            return res.status(404).send({messege:"Store Not Found"})
        }
    })
}
function deleteTestimonials(req,res){
    if(req.params.store && req.params.id){
        Store.find({_id:req.params.store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});
            }
            else if(mystore.length>0){
                Testimonails.findOneAndDelete({_id:req.params.id}).exec((err,data)=>{
                    if(err){
                        return res.status(500).send({messege:"Error Occured"})
                    }
                    else if(data){
                        return res.status(200).send({messege:"Deleted SuccessFully"});
                    }
                    else{
                        return res.status(404).send({messege:"Testimonials Not Found"});
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

function edittestimonials(req,res){
    if(req.params.store && req.params.id){
        if(req.body.data && req.body.name && req.body.designation && req.body.image){
            Store.find({_id:req.params.id}).exec((err,mystore)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"})
                }
                else if(mystore.length>0){
                    Testimonails.findOneAndUpdate({_id:id},{$set:{
                        image:req.body.image,
                        name:req.body.name,
                        designation:req.body.designation,
                        data:req.body.data
                    }}).exec((err,data)=>{
                        if(err){
                            return res.send({messege:"Error Occured"});
                        }
                        else if(data){
                            return res.status(200).send({messege:"data Updated",data:data});
                        }
                        else{
                            return res.status(404).send({messege:"Not Updated product doesn't exist"});
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
        return res.status(400).send({messege:"Error Occured"});
    }
}
module.exports = {
    gettestimonials,
    addtetsimonials,
    deleteTestimonials,
    edittestimonials
}