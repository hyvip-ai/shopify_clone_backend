const Product = require("../models/feature-products");
function addproduct(req,res){
    const params = req.body;
    if(params.name && params.price && params.image &&params.details){
        var product = new Product();
        product.image = params.image;
        product.name = params.name;
        product.price = params.price
        product.details = params.details
        product.save((err,data)=>{
            if(err){
                return res.status(500).send({messege:"Error While Saving Data"});
            }
            else{
                return res.status(201).send({messege:"Product Added",data:data});

            }
        })
    }
    else{
        return res.status(400).send({messege:"Invalid Data"});
    }

}

function getallProducts(req,res){

    Product.find({}).exec((err,data)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});

        }
        else{
            return res.status(200).send({messege:data})

        }
    })

}
function deleteProduct(req,res){
    var product_id = req.params.id;
    Product.findOneAndDelete({_id:product_id}).exec((err,deleted)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"})

        }
        else{
            return res.status(200).send({messege:"Deleted",data:deleted})

        }
    })
}

module.exports = {
    addproduct,
    getallProducts,
    deleteProduct
}