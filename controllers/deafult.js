function status(req,res){
    return res.status(200).send({name:"Shopify Clone Apis",status:"Up and Running"})
}

module.exports = {status}