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
	showItems();
});

var showItems = function(){
	console.log("These are the items for sale in the bamazon store.");
	var query = "SELECT item_id, product_name, price FROM products";
	connection.query(query, function(err, res){
		if (err) throw err;
		for (var i = 0; i < res.length; i++) {
			console.log("item_id: " + res[i].item_id + "   || product_name: " + res[i].product_name +
				"   || price: " + res[i].price);
		}
		askUser();
	});
};

var askUser = function(user) {
	inquirer.prompt([
	{
		type: "input",
		message: "Give the id of the product that you want to buy.",
		name: "item_id"
	},
	{
		type: "input",
		message: "How many units of that product you want to buy.",
		name: "stock_quantity"
	}
	]).then(function(user){
		var query = "SELECT stock_quantity FROM products";
		connection.query(query, function(err, res){
			if (err) throw err;
			for (var i = 0; i < 1; i++) {
				if (user.stock_quantity > res[i].stock_quantity){
					console.log("we only have 10 items, Select again");
					inquirer.prompt([
					{
						type: "input",
						message: "How many units of that product you want to buy.",
						name: "stock_quantity"
					}
					]);
				}
				else {
					console.log("Item_id: " + user.item_id + " || Quantity: " + user.stock_quantity);
					console.log("your order is getting ready");
				}
			}
		});
	});
};

var update = function(user){
	var query = "UPDATE products, SET stock_quantity = stock_quantity - ?, WHERE item_id = ?";
	connection.query(query, [user.stock_quantity, user.item_id],function(err, res){
		if (err) throw err;
	});
};

var total = function(user){
	var totalBill = user.stock_quantity * res.products;
	console.log(totalBill);
};