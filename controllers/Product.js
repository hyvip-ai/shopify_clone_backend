const Product = require("../models/feature-products");
const Store = require("../models/store")
function addproduct(req,res){
if(req.params.store){
    if(params.name && params.price && params.image &&params.details){
    const params = req.body;
    const store = req.params.store;
    Store.find({_id:store}).exec((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else if(mystore.length>0){
            
                var product = new Product();
                product.image = params.image;
                product.name = params.name;
                product.price = params.price
                product.details = params.details
                product.availability = params.availability
                product.store = store
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
            return res.status(404).send({messege:"Store Not Found"});
        }
    })
    }
    else{
        return res.status(404).send({messege:"Invalid data"});
    }
}
else{
    return res.status(401).send({messege:"User Not Authorized"});
}


}

function getallProducts(req,res){
    const store = req.params.store;
    Store.find({_id:store}).find((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else if(mystore.length>0){
            Product.find({store:store}).exec((err,data)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"});
        
                }
                else if(data.length>0){
                    return res.status(200).send({messege:"products found",data:data})
                }
                else{
                    return res.status(404).send({messege:"No Products Found",data:data});
                }
            })
        }
        else{
            return res.status(404).send({messege:"Store Not Found"});
        }
    })

}
function deleteProduct(req,res){
    if(req.params.store && req.params.id){
        Store.find({_id:req.params.store}).exec((err,mystore)=>{
            if(err){
                return res.status(500).send({messege:"Error Occured"});
            }   
            else if(mystore.length>0){
                Product.findOneAndDelete({_id:req.params.id}).exec((err,data)=>{
                    if(err){
                        return res.status(500).send({messege:"Error Occured"});
                    }
                    else if(data){
                        return res.status(200).send({messege:"Product Deleted",data:data});
                    }
                    else{
                        return res.status(404).send({messege:"product Not Found"});
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


function editProduct(req,res){

    if(req.params.store && req.params.id){
        if(req.body.image && req.body.name && req.body.price && req.body.details && req.body.availability){
            Store.find({_id:req.params.id}).exec((err,mystore)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"})
                }
                else if(mystore.length>0){
                    Product.findOneAndUpdate({_id:id},{$set:{
                        image:req.body.image,
                        name:req.body.name,
                        price:req.body.price,
                        details:req.body.details,
                        availability:req.body.availability
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
    addproduct,
    getallProducts,
    deleteProduct,
    editProduct
}