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
			res.send({"errorCode": null,"errorDesc": null,"status": null,"addresslist": null});
		}
	});
},
saveCustomerDetails: function(req,res){
	var value = 100000 + parseInt(req.Random.integer(1, 100));
	var DateTime = req.pDate.create().now();
	var ID = Math.floor(parseInt(DateTime)/parseInt(value));
	var new_customer = new customer({
	 "customerId": parseInt(ID),
	 "customerStatus": req.body.customerStatus,
	 "customerFirstName": req.body.customerFirstName,
	 "customerLastName": req.body.customerLastName,
	 "address": req.body.address,
	 "user": req.body.user.userName
	 });
	 var new_address = new address({
	 "addressId": parseInt(ID),
	 "customerId": parseInt(ID),
	 "addressFirstLine": req.body.address.addressFirstLine,
	 "addressSecondLine": req.body.address.addressSecondLine,
	 "city": req.body.address.city,
	 "state": req.body.address.state,
	 "country": req.body.address.country,
	 "zipCode": req.body.address.zipCode
	 });
	 var new_app_user = new app_user({
	 "userId" : parseInt(ID), 
	 "userName" : req.body.user.userName, 
	 "Password" : req.body.user.Password, 
	 "customerId" : parseInt(ID)
	 });
	 new_customer.save(function (err1, result1) {
		if (err1) {
			console.log("Error Saving Customer Details!!");
			res.send({"errorCode": null,"errorDesc": null,"status": null});
		} 
		else {
			new_address.save(function (err2, result2) {
				if (err2) {
					console.log("Error Saving Address Details!!");
					res.send({"errorCode": null,"errorDesc": null,"status": null});
				} 
				else {
					console.log('Address Saved Successfully!!!');
				}
			 });
			 new_app_user.save(function (err3, result3) {
				if (err3) {
					console.log("Error Saving New User Details!!");
					res.send({"errorCode": null,"errorDesc": null,"status": null});
				} 
				else {
					console.log('New User Created Successfully!!!');
				}
			 });
			console.log('Customer Details Saved Successfully!!!');
			res.send({"errorCode": null,"errorDesc": null,"status": "success","CustomerID":result1.customerId});
		}
	 });
}
};
module.exports = CMSController;