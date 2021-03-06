const Product = require("../models/feature-products");
const Store = require("../models/store");
function addproduct(req, res) {
  if (req.params.store) {
    const params = req.body;
    if (params.name && params.price && params.image && params.details) {
      const params = req.body;
      const store = req.params.store;
      Store.find({ _id: store }).exec((err, mystore) => {
        if (err) {
          return res.status(500).send({ messege: "Error Occured" });
        } else if (mystore.length > 0) {
          var product = new Product();
          product.image = params.image;
          product.name = params.name;
          product.price = params.price;
          product.details = params.details;
          product.availability = params.availability;
          product.store = store;
          product.save((err, data) => {
            if (err) {
              return res
                .status(500)
                .send({ messege: "Error While Saving Data" });
            } else {
              return res
                .status(201)
                .send({ messege: "Product Added", data: data });
            }
          });
        } else {
          return res.status(404).send({ messege: "Store Not Found" });
        }
      });
    } else {
      return res.status(404).send({ messege: "Invalid data" });
    }
  } else {
    return res.status(401).send({ messege: "User Not Authorized" });
  }
}

function getallProducts(req, res) {
  const store = req.params.store;
  Store.find({ _id: store }).find((err, mystore) => {
    if (err) {
      return res.status(500).send({ messege: "Error Occured" });
    } else if (mystore.length > 0) {
      Product.find({ store: store }).exec((err, data) => {
        if (err) {
          return res.status(500).send({ messege: "Error Occured" });
        } else if (data.length > 0) {
          return res
            .status(200)
            .send({ messege: "products found", data: data });
        } else {
          return res
            .status(404)
            .send({ messege: "No Products Found", data: data });
        }
      });
    } else {
      return res.status(404).send({ messege: "Store Not Found" });
    }
  });
}
function deleteProduct(req, res) {
  if (req.params.store && req.params.id) {
    Store.find({ _id: req.params.store }).exec((err, mystore) => {
      if (err) {
        return res.status(500).send({ messege: "Error Occured" });
      } else if (mystore.length > 0) {
        Product.findOneAndDelete({ _id: req.params.id }).exec((err, data) => {
          if (err) {
            return res.status(500).send({ messege: "Error Occured" });
          } else if (data) {
            return res
              .status(200)
              .send({ messege: "Product Deleted", data: data });
          } else {
            return res.status(404).send({ messege: "product Not Found" });
          }
        });
      } else {
        return res.status(404).send({ messege: "Store Not Found" });
      }
    });
  } else {
    return res.status(400).send({ messege: "Invalid Data" });
  }
}
function getProductById(req, res) {
  if (req.params.store && req.params.id) {
      Store.find({_id:req.params.store}).exec((err,mystore)=>{
          if(err){
            return res.status(500).send({messege:"Error Occured"});
          }
          else if(mystore.length>0){
            Product.find({_id:req.params.id}).exec((err,data)=>{
                if(err){
                    return res.status(500).send({messege:"Error Occured"});
                }
                else if(data.length>0){
                    return res.status(200).send({messege:"found",data:data})
                }
                else{
                    return res.status(404).send({messege:"Product Not Found"});
                }
            })
          }
          else{
              return res.status(404).send({messege:"Store Not Found"});
          }
      })
  } else {
    return res.status(400).send({ messege: "Invalid Data" });
  }
}
module.exports = {
  addproduct,
  getallProducts,
  getProductById,
  deleteProduct,
};
