DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;
CREATE TABLE products(
item_id INT NOT NULL auto_increment
, product_name VARCHAR(50) NOT NULL
, department_name VARCHAR(50) NOT NULL
, price DECIMAL(10,2) NOT NULL
, stock_quantity INT(10) NOT NULL
, PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Air", "Electronics", 1200, 10)
,("iPhone x", "Electronics", 800.00, 5)
,("Couch", "Furniture", 300.00, 2)
,("Prada Sunglasses", "Jewelry", 250.00, 1)
,("Diamond Ring", "Jewelry", 900.00, 3)
,("Rain Coat", "Clothing", 30.00, 100)
,("Salt Lamp", "Furniture", 15.00, 200)
,("Birkin Bag", "Clothing", 12000.00, 2)
,("Nintendo Switch", "Electronics", 300.00, 20)
,("Hair Dryer", "Electronics", 80.00, 40);

SELECT * FROM products