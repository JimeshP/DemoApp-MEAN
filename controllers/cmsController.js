var CMSController={
 validateUser: function(req,res){
	console.log("user :"+req.params.username);
	var db = req.db;
	var app_user = db.get("app_user");
	app_user.findOne({"userName":req.params.username},{}, function (err, result) {
		if (result) {
			console.log("User Validated Successfully!!")
			res.send(result);
		} else {
			console.log("Error Retrieving Data!!")
			res.send({"userId":null,"userName":null,"password":null,"customerId":null});
		}
	});
},
 getUserList: function(req,res){
	var db = req.db;
	var app_user = db.get("app_user");
	app_user.find({}, function (err, result) {
		if (result) {
			console.log("UserList retrieved successfully!!")
			res.send({"errorCode": null,"errorDesc": null,"status": "success","userList":result});
		} else {
			console.log("Error Retrieving Data!!")
			res.send(err);
		}
	});
},
 getCustomerList: function(req,res){
	var db = req.db;
	var customer = db.get("customer");
	customer.find({}, function (err, result) {
		if (result) {
			console.log("CustomerList retrieved successfully!!")
			res.send({"errorCode": null,"errorDesc": null,"status": "success","customerList":result});
		} else {
			console.log("Error Retrieving Data!!")
			res.send(err);
		}
	});
},
getCustomerAddress: function(req,res){
	var db = req.db;
	var address = db.get("address");
	address.findOne({"customerId": parseInt(req.params.cid)},{}, function (err, result) {
		if (result) {
			console.log("CustomerAddress retrieved successfully!!")
			res.send({"errorCode": null,"errorDesc": null,"status": "success","addresslist":[result]});
		} else {
			console.log("Error Retrieving Data!!")
			res.send({"errorCode": null,"errorDesc": null,"status": "success","addresslist": null});
		}
	});
}
};
module.exports = CMSController;