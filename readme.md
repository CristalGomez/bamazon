# Bamazon 

Bamazon is a CLI App that functions like an online store. This CLI App demonstrates how the user affects the database it is interacting with. The user makes a purchase and the inventory decreases when a purchase goes through. When you run the nodeJS file, you are presented with a list of items that are in stock in the following format:

Item ID | Item Name | Department | Price | Inventory #

## NPMs Used
1. Inquirer
1. MySQL

### How to use:

Run the nodeJS app. When the CLI App has successfully loaded, you will be presented with the items that are in the inventory. Study the items and decide what you want to buy. When you are ready, type in the **item ID** associated with the product you want to buy. *Note: item ID input must be a numerical value. If not entered correctly, the app will throw an err and Bamazon will stop running.* Next, the app will ask you how many items you will like to purchase. Again, this input must be a numerical value, otherwise the app will stop running. Depending on your response, Bamazon will run until the connection has ended. 

If all is well, the app should look like this:

**Inventory Display & user's item ID input**
![selectID]()


### Important Notes:
If you are cloning this app to your machine, note that it will not run unless you fill in the password associated with your MySQL. 