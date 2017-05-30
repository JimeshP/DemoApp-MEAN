var DBController={
setCustomerDB: function(req,res){
	var db = req.db;
	console.log("inserting..");
	var customer = db.get("customer");
	    customer.insert([
{"customerId": 59,"customerStatus": "active","customerFirstName": "VMware","customerLastName": "Inc","address": null,"user": null},
{"customerId": 67,"customerStatus": "active","customerFirstName": "Interra","customerLastName": "Tech","address": null,"user": null}], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted into customer');
      }
    });
},
setAppUserDB: function(req,res){
	var db = req.db;
	console.log("inserting..");
	var app_user = db.get("app_user");
	    app_user.insert([
 {"userId": 23,"userName": "vmware","password": "vmware","customerId": 59},
 {"userId": 31,"userName": "interra","password": "interra","customerId": 67}], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted into app_user');
      }
    });
},
setAddressDB: function(req,res){
	var db = req.db;
	console.log("inserting..");
	var address = db.get("address");
	    address.insert([
{"addressId": 21,"customerId": 59,"addressFirstLine": "3401 Hillview Ave","addressSecondLine": "Palo Alto","city": "Palo Alto","state": "California","country": "USA","zipCode": "94304"},
{"addressId": 29,"customerId": 67,"addressFirstLine": "25 Metro Dr","addressSecondLine": "500","city": "San Jose","state": "California","country": "USA","zipCode": "95110"}
], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted into address');
      }
    });
},
setProductDB: function(req,res){
	var db = req.db;
	console.log("inserting..");
	var product = db.get("product");
	    product.insert([
{"productId": 6,"productName": "Skateboard 1"},
{"productId": 7,"productName": "Skateboard 2"},
{"productId": 8,"productName": "Skateboard 3"},
{"productId": 9,"productName": "Skateboard 4"},
{"productId": 10,"productName": "Deck 1"},
{"productId": 11,"productName": "Deck 2"},
{"productId": 12,"productName": "Deck 3"},
{"productId": 13,"productName": "Deck 4"},
{"productId": 14,"productName": "Wheels 1"},
{"productId": 15,"productName": "Wheels 2"},
{"productId": 16,"productName": "Wheels 3"},
{"productId": 17,"productName": "Wheels 4"},
{"productId": 18,"productName": "Skateboard 5"},
{"productId": 19,"productName": "Skateboard 6"},
{"productId": 20,"productName": "Skateboard 7"},
{"productId": 21,"productName": "Skateboard 8"},
{"productId": 22,"productName": "Deck 5"},
{"productId": 23,"productName": "Deck 6"},
{"productId": 24,"productName": "Deck 7"},
{"productId": 25,"productName": "Deck 8"},
{"productId": 28,"productName": "Wheels 5"},
{"productId": 29,"productName": "Wheels 6"},
{"productId": 30,"productName": "Wheels 7"},
{"productId": 31,"productName": "Wheels 8"}], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted into product');
      }
    });
},
setProductPriceDB: function(req,res){
	var db = req.db;
	console.log("inserting..");
	var product_price = db.get("product_price");
	    product_price.insert([
{"productPriceId": 11,"pricePerUnit": 20,"productPRODID": 6},
{"productPriceId": 12,"pricePerUnit": 40,"productPRODID": 7},
{"productPriceId": 13,"pricePerUnit": 50,"productPRODID": 8},
{"productPriceId": 14,"pricePerUnit": 80,"productPRODID": 9},
{"productPriceId": 15,"pricePerUnit": 90,"productPRODID": 10},
{"productPriceId": 16,"pricePerUnit": 40,"productPRODID": 11},
{"productPriceId": 17,"pricePerUnit": 60,"productPRODID": 12},
{"productPriceId": 18,"pricePerUnit": 80,"productPRODID": 13},
{"productPriceId": 19,"pricePerUnit": 40,"productPRODID": 14},
{"productPriceId": 20,"pricePerUnit": 200,"productPRODID": 15},
{"productPriceId": 21,"pricePerUnit": 50,"productPRODID": 16},
{"productPriceId": 22,"pricePerUnit": 100,"productPRODID": 17},
{"productPriceId": 23,"pricePerUnit": 120,"productPRODID": 18},
{"productPriceId": 24,"pricePerUnit": 140,"productPRODID": 19},
{"productPriceId": 25,"pricePerUnit": 150,"productPRODID": 20},
{"productPriceId": 26,"pricePerUnit": 300,"productPRODID": 21},
{"productPriceId": 27,"pricePerUnit": 140,"productPRODID": 22},
{"productPriceId": 28,"pricePerUnit": 110,"productPRODID": 23},
{"productPriceId": 29,"pricePerUnit": 130,"productPRODID": 24},
{"productPriceId": 30,"pricePerUnit": 100,"productPRODID": 25},
{"productPriceId": 33,"pricePerUnit": 40,"productPRODID": 28},
{"productPriceId": 34,"pricePerUnit": 200,"productPRODID": 29},
{"productPriceId": 35,"pricePerUnit": 60,"productPRODID": 30},
{"productPriceId": 36,"pricePerUnit": 140,"productPRODID": 31}], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted in to product_price');
      }
    });
},
setProductsDB: function(req,res){
	var db = req.db;
	console.log("inserting..");
	var products = db.get("products");
	    products.insert([{
      "productId": 6,
      "productName": "Skateboard 1",
      "productPriceBVOList": [
        {
          "productPriceId": 11,
          "pricePerUnit": 20,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 7,
      "productName": "Skateboard 2",
      "productPriceBVOList": [
        {
          "productPriceId": 12,
          "pricePerUnit": 40,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 8,
      "productName": "Skateboard 3",
      "productPriceBVOList": [
        {
          "productPriceId": 13,
          "pricePerUnit": 50,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 9,
      "productName": "Skateboard 4",
      "productPriceBVOList": [
        {
          "productPriceId": 14,
          "pricePerUnit": 80,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 10,
      "productName": "Deck 1",
      "productPriceBVOList": [
        {
          "productPriceId": 15,
          "pricePerUnit": 90,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 11,
      "productName": "Deck 2",
      "productPriceBVOList": [
        {
          "productPriceId": 16,
          "pricePerUnit": 40,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 12,
      "productName": "Deck 3",
      "productPriceBVOList": [
        {
          "productPriceId": 17,
          "pricePerUnit": 60,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 13,
      "productName": "Deck 4",
      "productPriceBVOList": [
        {
          "productPriceId": 18,
          "pricePerUnit": 80,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 14,
      "productName": "Wheels 1",
      "productPriceBVOList": [
        {
          "productPriceId": 19,
          "pricePerUnit": 40,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 15,
      "productName": "Wheels 2",
      "productPriceBVOList": [
        {
          "productPriceId": 20,
          "pricePerUnit": 200,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 16,
      "productName": "Wheels 3",
      "productPriceBVOList": [
        {
          "productPriceId": 21,
          "pricePerUnit": 50,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 17,
      "productName": "Wheels 4",
      "productPriceBVOList": [
        {
          "productPriceId": 22,
          "pricePerUnit": 100,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 18,
      "productName": "Skateboard 5",
      "productPriceBVOList": [
        {
          "productPriceId": 23,
          "pricePerUnit": 120,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 19,
      "productName": "Skateboard 6",
      "productPriceBVOList": [
        {
          "productPriceId": 24,
          "pricePerUnit": 140,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 20,
      "productName": "Skateboard 7",
      "productPriceBVOList": [
        {
          "productPriceId": 25,
          "pricePerUnit": 150,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 21,
      "productName": "Skateboard 8",
      "productPriceBVOList": [
        {
          "productPriceId": 26,
          "pricePerUnit": 300,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 22,
      "productName": "Deck 5",
      "productPriceBVOList": [
        {
          "productPriceId": 27,
          "pricePerUnit": 140,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 23,
      "productName": "Deck 6",
      "productPriceBVOList": [
        {
          "productPriceId": 28,
          "pricePerUnit": 110,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 24,
      "productName": "Deck 7",
      "productPriceBVOList": [
        {
          "productPriceId": 29,
          "pricePerUnit": 130,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 25,
      "productName": "Deck 8",
      "productPriceBVOList": [
        {
          "productPriceId": 30,
          "pricePerUnit": 100,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 28,
      "productName": "Wheels 5",
      "productPriceBVOList": [
        {
          "productPriceId": 33,
          "pricePerUnit": 40,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 29,
      "productName": "Wheels 6",
      "productPriceBVOList": [
        {
          "productPriceId": 34,
          "pricePerUnit": 200,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 30,
      "productName": "Wheels 7",
      "productPriceBVOList": [
        {
          "productPriceId": 35,
          "pricePerUnit": 60,
          "productPRODID": null
        }
      ]
    },
    {
      "productId": 31,
      "productName": "Wheels 8",
      "productPriceBVOList": [
        {
          "productPriceId": 36,
          "pricePerUnit": 140,
          "productPRODID": null
        }
      ]
    }], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted in to products');
      }
    });
},
setOrdersDB: function(req,res){
	var db = req.db;
	console.log("inserting..");
	var orders = db.get("orders");
	   orders.insert([
{
      "errorCode": null,
      "message": null,
      "status": null,
      "orderId": 84,
      "customerId": 59,
      "customerName": "VMware Inc",
      "statusId": 1,
      "orderDate": 1445558400000,
      "orderLineBVOList": [
        {
          "orderLineId": 141,
          "productId": 7,
          "productPriceId": 12,
          "productPriceValue": 40
        },
        {
          "orderLineId": 142,
          "productId": 7,
          "productPriceId": 12,
          "productPriceValue": 40
        }
      ]
    },
    {
      "errorCode": null,
      "message": null,
      "status": null,
      "orderId": 122,
      "customerId": 59,
      "customerName": "VMware Inc",
      "statusId": 0,
      "orderDate": 1470873600000,
      "orderLineBVOList": [
        {
          "orderLineId": 222,
          "productId": 7,
          "productPriceId": 12,
          "productPriceValue": 40
        },
        {
          "orderLineId": 232,
          "productId": 21,
          "productPriceId": 26,
          "productPriceValue": 300
        },
        {
          "orderLineId": 242,
          "productId": 11,
          "productPriceId": 16,
          "productPriceValue": 40
        },
        {
          "orderLineId": 252,
          "productId": 16,
          "productPriceId": 21,
          "productPriceValue": 50
        }
      ]
    },
    {
      "errorCode": null,
      "message": null,
      "status": null,
      "orderId": 85,
      "customerId": 67,
      "customerName": "Interra Tech",
      "statusId": 1,
      "orderDate": 1445558400000,
      "orderLineBVOList": [
        {
          "orderLineId": 143,
          "productId": 6,
          "productPriceId": 11,
          "productPriceValue": 20
        },
        {
          "orderLineId": 144,
          "productId": 6,
          "productPriceId": 11,
          "productPriceValue": 20
        }
      ]
    },
    {
      "errorCode": null,
      "message": null,
      "status": null,
      "orderId": 86,
      "customerId": 67,
      "customerName": "Interra Tech",
      "statusId": 1,
      "orderDate": 1445558400000,
      "orderLineBVOList": [
        {
          "orderLineId": 145,
          "productId": 6,
          "productPriceId": 11,
          "productPriceValue": 20
        },
        {
          "orderLineId": 146,
          "productId": 7,
          "productPriceId": 12,
          "productPriceValue": 40
        },
        {
          "orderLineId": 147,
          "productId": 8,
          "productPriceId": 13,
          "productPriceValue": 50
        },
        {
          "orderLineId": 150,
          "productId": 6,
          "productPriceId": 11,
          "productPriceValue": 20
        },
        {
          "orderLineId": 151,
          "productId": 7,
          "productPriceId": 12,
          "productPriceValue": 40
        },
        {
          "orderLineId": 152,
          "productId": 8,
          "productPriceId": 13,
          "productPriceValue": 50
        }
      ]
    },
    {
      "errorCode": null,
      "message": null,
      "status": null,
      "orderId": 87,
      "customerId": 67,
      "customerName": "Interra Tech",
      "statusId": 1,
      "orderDate": 1445558400000,
      "orderLineBVOList": [
        {
          "orderLineId": 148,
          "productId": 6,
          "productPriceId": 11,
          "productPriceValue": 20
        },
        {
          "orderLineId": 149,
          "productId": 7,
          "productPriceId": 12,
          "productPriceValue": 40
        },
        {
          "orderLineId": 153,
          "productId": 6,
          "productPriceId": 11,
          "productPriceValue": 20
        },
        {
          "orderLineId": 154,
          "productId": 7,
          "productPriceId": 12,
          "productPriceValue": 40
        }
      ]
    }], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted in to orders');
      }
    });
}
};
module.exports = DBController;