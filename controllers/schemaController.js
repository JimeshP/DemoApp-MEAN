var mongoose = require('mongoose');
var Schema_Controller ={ 
 appUserModel: function()
 {
	var app_user_Schema = new mongoose.Schema({
	 userId : Number, 
	 userName : String, 
	 Password : String, 
	 customerId : Number
	 },{ collection : 'app_user' });
    var app_users = mongoose.model('app_user',app_user_Schema); 
	return app_users;
 },
 customerModel: function()
 {
	var customer_Schema = new mongoose.Schema({
	 customerId: Number,
	 customerStatus: String,
	 customerFirstName: String,
	 customerLastName: String,
	 address: String,
	 user: String
	 },{ collection : 'customer' });
    var customers = mongoose.model('customer',customer_Schema); 
	return customers;
 },
  addressModel: function()
 {
	var address_Schema = new mongoose.Schema({
	 addressId: Number,
	 customerId: Number,
	 addressFirstLine: String,
	 addressSecondLine: String,
	 city: String,
	 state: String,
	 country: String,
	 zipCode: String
	 },{ collection : 'address' });
    var address = mongoose.model('address',address_Schema); 
	return address;
 },
 orderModel: function()
 {
	var order_Schema = new mongoose.Schema({
	 orderId: String, 
	 customerId: Number,
	 customerName: String, 
	 statusId: Number ,
	 orderDate: String, 
	 orderLineBVOList: String
	 },{ collection : 'order' });
    var orders = mongoose.model('order',order_Schema); 
	return orders;
 },
 productModel: function()
 {
    var product_Schema = new mongoose.Schema({
		productId: Number,
		productName: String,
		productPriceBVOList: [{
			    productPriceId: Number,
				pricePerUnit: Number,
				productPRODID: String
				}]
		},{ collection : 'products' });
    var products = mongoose.model('products',product_Schema); 
	return products;	 
 },
 getSchemas: function()
 {
		return [app_user, customer, address, orders, products];
 }
 }
var app_user = Schema_Controller.appUserModel();
var customer = Schema_Controller.customerModel();
var address  = Schema_Controller.addressModel();
var orders  = Schema_Controller.orderModel();
var products  = Schema_Controller.productModel();

module.exports = Schema_Controller;

