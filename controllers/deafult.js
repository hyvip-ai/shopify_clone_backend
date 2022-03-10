function status(req, res) {
  return res
    .status(200)
    .send({ name: "Shopify Clone Apis", status: "Up and Running" });
}
function project(req, res) {
  return res
    .status(200)
    .send({ Name: "Hello World", data: "This is the homepage of the project" });
}
module.exports = { status, project };
