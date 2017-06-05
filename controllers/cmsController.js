var schemaController = require('./../controllers/schemaController.js');
var schemas = schemaController.getSchemas();
var app_user = schemas[0];
var customer = schemas[1];
var address = schemas[2];

var CMSController={ 
 validateUser: function(req,res){
	console.log("user :"+req.params.username);
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