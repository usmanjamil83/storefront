var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "newuser",
	password: "happy12",
	database: "bamazon"
});

connection.connect(function(err){
	if(err) throw err;
	showitems();
});

var showitems = function(){
	console.log("These are the items for sale in the bamazon store.");
	var query = "SELECT item_id, product_name, price FROM products";
	connection.query(query, function(err, res){
		for (var i = 0; i < res.length; i++) {
			console.log("item_id: " + res[i].item_id + "   || product_name: " + res[i].product_name +
				"   || price: " + res[i].price);
		}
	});
};