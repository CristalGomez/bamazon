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
![selectID](https://github.com/CristalGomez/bamazon/blob/master/images_customer/selectID.png)

**User's quantity input**
![selectQty](https://github.com/CristalGomez/bamazon/blob/master/images_customer/selectQty.png)

**If there is a sufficient amount of the item in stock, the transaction will be complete**
![transComplete](https://github.com/CristalGomez/bamazon/blob/master/images_customer/transComplete.png)

**If stock is low, user will be presented with an option to end the transaction, or shop for something new**
![lowInventory](https://github.com/CristalGomez/bamazon/blob/master/images_customer/lowInventory.png)

**If user chooses not to shop for something else, the connection will end and Bamazon will give a goodbye message**
![lowInventory_n](https://github.com/CristalGomez/bamazon/blob/master/images_customer/lowInventory_n.png)

**If user chooses to continue shopping, the mainMenu function will run, bringing them to the orginal start of the startBamazon function**
*Note: the connection does not end*

![lowInventory_y](https://github.com/CristalGomez/bamazon/blob/master/images_customer/lowInventory_y.png)


### Important Notes:
If you are cloning this app to your machine, note that it will not run unless you fill in the password associated with your MySQL. 