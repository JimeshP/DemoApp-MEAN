var express = require('express');
var router = express.Router();
var cmsController = require('./../controllers/cmsController.js');
var omsController = require('./../controllers/omsController.js');
var pmsController = require('./../controllers/pmsController.js');
//var mqController = require('./../controllers/mqController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* CMS,PMS,OMS API calls. */
router.get('/ossb-cms-service/cms/api/userservice/:username/validate', function(req ,res, next){
	console.log(" User Validation Request:");
	cmsController.validateUser(req,res);
	});
router.get('/ossb-cms-service/cms/api/userservice', function(req ,res, next){
	console.log("Retrieving User List..");
	cmsController.getUserList(req,res)
});
router.get('/ossb-cms-service/cms/api/customerservice', function(req ,res, next){
	console.log("Retrieving Customer List..");
	cmsController.getCustomerList(req,res)
});
router.get('/ossb-cms-service/cms/api/addressservice/customer/:cid', function(req ,res, next){
	console.log("Retrieving Customer Address..");
	cmsController.getCustomerAddress(req,res)
});
router.get('/ossb-pms-service/pms/api/productservice/', function(req ,res, next){
	console.log("Retrieving Product Details..");
	pmsController.getProductDetails(req,res)
});
router.get('/ossb-oms-service/oms/api/orderservice/customer/:id', function(req ,res, next){
	console.log("Retrieving Customer Order Details..");
	omsController.getCustomerOrderDetails(req,res)
});
router.put('/ossb-cms-service/cms/api/customerservice', function(req ,res, next){
	console.log("Saving Customer Details..");
	cmsController.saveCustomerDetails(req,res)
});
router.put('/ossb-oms-service/oms/api/orderservice/', function(req ,res, next){
	console.log("Setting Order Details..");
	omsController.setOrderDetails(req,res)
});
router.post('/ossb-oms-service/oms/api/orderservice/processorder', function(req ,res, next){
	console.log("Retrieving Order Details..");
	omsController.getOrderDetails(req,res)
});


/*
// ActiveMQ Client api calls for sending and receiving messages
router.get('/AMQsend', function(req ,res, next){
	console.log("sending");
	mqController.sendMessage("order placed");
});
router.get('/AMQreceive', function(req ,res, next){
	console.log("getting");
	mqController.recMessage();
}); 
*/
module.exports = router;
