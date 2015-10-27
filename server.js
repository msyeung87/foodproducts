var express 	= require('express');
var app 		= express();
var mongojs 	= require('mongojs');
var db 			= mongojs('productlist', ['productlist']);
var bodyParser 	= require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/productlist', function(req, res){
	console.log("i received a get request");

	db.productlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/productlist', function(req, res){
	console.log(req.body);
	db.productlist.insert(req.body, function(err, doc){
		res.json(doc)
	});
});

app.delete('/productlist/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.productlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.get('/productlist/:id', function(req, res){
	var id = req.params.id;
	db.productlist.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put('/productlist/:id', function(req, res){
	var id = req.params.id;
	db.productlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, quantity: req.body.quantity, price: req.body.price}},
		new: true}, function(err, doc){
			res.json(doc);
		});
	
});

app.listen(3000)
console.log("Food Product is running")