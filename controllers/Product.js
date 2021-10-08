const Product = require("../models/feature-products");
const Store = require("../models/store")
function addproduct(req,res){
    const params = req.body;
    const store = req.params.store;
    Store.find({_id:store}).exec((err,mystore)=>{
        if(err){
            return res.status(500).send({messege:"Error Occured"});
        }
        else if(mystore.length>0){
            if(params.name && params.price && params.image &&params.details){
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
                return res.status(400).send({messege:"Invalid Data"});
            }
        }
        else{
            return res.status(404).send({messege:"Store Not Found"});
        }
    })


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


module.exports = {
    addproduct,
    getallProducts
}