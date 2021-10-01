const Testimonails = require("../models/Testimonails");
function addtetsimonials(req,res){
    const params = req.body;
    if(params.data && params.name && params.designation){
        var testimonial =new Testimonails();
        testimonial.data = params.data;
        testimonial.name = params.name;
        testimonial.designation = params.designation;
        testimonial.save((err,dataSaved)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"})
            }
            else{
                return res.status(201).send({messege:dataSaved});
            }
        })
    }
    else{
        return res.status(400).send({messege:"Invalid Data"})
    }
}


function deletetestimonials(req,res){

}

function gettestimonials(req,res){
    Testimonails.find({}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else{
            return res.status(200).send({messege:data});
        }
    })
}