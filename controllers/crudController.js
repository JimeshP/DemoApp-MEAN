var List=[];
var CMSController={
 getList: function(req,res){
	var db = req.db;
	var collection = db.get("MyCollection");
	collection.find({}, function (err, result) {
		if (err) {
			console.log("Error Retrieving Data!!")
			res.send(err);
		} else {
			console.log("Data Retrieved Successfully!!")
			res.send(result);
		}
	});
},
 getListByEmail: function(req,res){
	var db = req.db;
	var collection = db.get("MyCollection");
	collection.findOne({"list.email":req.params.email},{}, function (err, result) {
		if (err) {
			console.log("Error Retrieving Data!!")
			res.send(err);
		} else {
			console.log("Data Retrieved Successfully!!")
			res.send(result);
		}
	});
},
 setList: function(req,res){
	List.push(req.body.contact);
	var db = req.db;
	var collection = db.get("MyCollection");
	collection.insert({list:req.body.contact}, function (err, result) {
		if (err) {
			console.log("Error Inserting Data!!")
			res.send(err);
		} else {
			console.log("Data Inserted Successfully!!")
			res.send(result);
		}
	});
 },
 delList: function(req,res){
	var db = req.db;
	var collection = db.get("MyCollection");
	collection.remove({"_id":req.params.id}, function (err, result)
	{
		if (err) {
			console.log("Error Deleting Data!!")
			res.send(err);
		} else {
			if(result==1)
			{
				console.log("Data Deleted Successfully!!");
				res.sendStatus(result);
			}
			else
			{
				console.log("Error Deleting Data!!");
				res.send("Error Deleting Data!!");
			}	
		}
	});
},
 updateList: function(req,res){
	var db = req.db;
	var collection = db.get("MyCollection");
	collection.update({"_id":req.params.id},{"list":req.body.value},{ upsert: true }, function (err, result) {
		if (err) {
			console.log("Error Updating Data!!")
			res.send(err);
		} else {
			console.log("Data Updated Successfully!!");
			res.sendStatus(result);
		}
	});
 }
};
module.exports = CRUDController;