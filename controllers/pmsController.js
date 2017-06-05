var schemaController = require('./../controllers/schemaController.js');
var products = schemaController.getSchemas()[4];
var PMSController ={
getProductDetails: function(req,res){
	products.find({}, function (err, result) {
		if (result) {
			console.log("Product list retrieved successfully!!")			
			res.send({"errorCode": null,"errorDesc": null,"status": null,"productList":result});
		} else {
			console.log("Error Retrieving Data!!")
			res.send({"errorCode": null,"errorDesc": null,"status": null,"productList": null});
		}
	});
}
};
module.exports= PMSController;