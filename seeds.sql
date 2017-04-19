CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("milk", "dairy", 2.79, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("meat", "meat", 4.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bread", "bakery", 1.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("icecream", "frozen", 3.79, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cheese", "deli", 5.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gum", "drug GM", 0.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tylenol", "pharmacy", 7.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coke", "grocery", 0.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("orange juice", "dairy", 1.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("banana", "produce", 0.49, 10);