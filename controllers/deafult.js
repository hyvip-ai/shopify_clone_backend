function status(req,res){
    return res.status(200).send({name:"Shopify Clone",status:"Up and Running"})
}

module.exports = {status}