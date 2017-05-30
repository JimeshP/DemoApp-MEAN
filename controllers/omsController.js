var mqController = require('../controllers/mqController.js');
var OMSController ={
getOrderDetails: function(req,res){
	var db = req.db;
	var orders = db.get("orders");
	orders.find({}, function (err, result) {
		if (result) {
			console.log("Order list retrieved successfully!!")			
			res.send({ "errorCode": "","message": null,"status": "Success","orderList":result});
		} else {
			console.log("Error Retrieving Data!!")
			res.send({ "errorCode": "","message": null,"status": "Success","orderList":null});
		}
	});
},
setOrderDetails: function(req,res){
	var db = req.db;
	var value = req.Random.integer(1, 100);
	var DateTime = req.pDate.create().now();
	var orders = db.get("orders");
	db.get("customer").findOne({"customerId": parseInt(req.body.customerId)},{}, function (err, result) {
		if (result) {
		    orders.insert([
				{ "errorCode": null,
				  "message": null,
				  "status": null,
				  "orderId": DateTime, 
				  "customerId": parseInt(req.body.customerId),
				  "customerName": result.customerFirstName+' '+result.customerLastName, 
				  "statusId": parseInt(req.body.statusId) ,
				  "orderDate": DateTime, 
				  "orderLineBVOList": req.body.orderLineBVOList
				}], function (err1, result1) {
				  if (err1) {
					console.log(err1);
				  } else {
					mqController.sendMessage(DateTime);
					console.log('Order Placed Successfully!!!');
				  }
				});
		} else {
			console.log("Error Placing Order!!");
			res.send(err);
		}
	});
	
	orders.find({}, function (err, result) {
		if (result) {
			console.log("Order list retrieved successfully!!")			
			res.send({ "errorCode": "","message": null,"status": "Success","orderList":result});
		} else {
			console.log("Error Retrieving Data!!")
			res.send({ "errorCode": "","message": null,"status": "Success","orderList":null});
		}
	});
	
},
getCustomerOrderDetails: function(req,res){
	var db = req.db;
	var orders = db.get("orders");
orders.find({"customerId":parseInt(req.params.id)},{}, function (err, result) {
		if (result) {
			console.log("Customer Order list retrieved successfully!!");
			//mqController.recMessage();
			for(var i=0;i<result.length;i++)
			{
				orders.update({"_id":result[i]._id},{$set: {"statusId":1}},{ upsert: true }, function (err, result) {
				if (err) {
					console.log("Error Updating Order Status!!")

				} else {
					//console.log("Order status updated successfully!!");
				}
			});
			}
			console.log("Order status updated successfully!!");
			res.send({ "errorCode": "","message": null,"status": "Success","orderList":result});
		} else {
			console.log("Error Retrieving Data!!")
			res.send({ "errorCode": "","message": null,"status": "Success","orderList":null});
		}
	});
}
};
module.exports= OMSController;