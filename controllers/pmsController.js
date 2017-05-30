var PMSController ={
getProductDetails: function(req,res){
	var db = req.db;
	var product = db.get("products");
	product.find({}, function (err, result) {
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