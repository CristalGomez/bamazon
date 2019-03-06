var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "\n");
    startBamazon();
    displayInventory();
})

function displayInventory() {
    //selecting all of the products from MySQL
    connection.query("SELECT * FROM products", function (err, inventory) {
        if (err) throw err;
        console.log("Welcome to Bamazon")
        console.log("----------------------------------------------------------------------------------------------------------------------------------")
        console.log("Recommended items for you:")
        console.log(" ")
        //looping through all 10 items in order to display their information
        for (var i = 0; i < inventory.length; i++) {
            console.log("Product ID: " + inventory[i].item_id + " | " + inventory[i].product_name + " | " + "Department: " + inventory[i].department_name + " | " + "Price: " + "$" + inventory[i].price + " | " + "Amount in Stock: " + inventory[i].stock_quantity);
        }
        console.log("----------------------------------------------------------------------------------------------------------------------------------")
    })
}

function startBamazon() {
    inquirer
        .prompt([
            {
                name: "selectID",
                message: "To select an item, enter the product ID (numerical values only)"
            },//"selectionID" prompt
            {
                name: "selectQty",
                message: "How many would you like to purchase? (numerical values only)"
            }//end of quantity selection
        ])//end of 1st inquirer.prompt
        .then(function (answer) {

            connection.query("SELECT * FROM products WHERE item_id = ?", [answer.selectID], function (err, res) {
                if (err) throw err;
                if (answer.selectQty > res[0].stock_quantity) {
                    console.log("Insufficient quantity")
                    mainMenu();
                } else {
                    var total = res[0].price * answer.selectQty; //res from line 48 * answer from lines 46
                    console.log("Sufficient quantity")
                    console.log("Your total is: " + "$" + total)
                    inquirer
                        .prompt([
                            {
                                type: "confirm",
                                name: "choice",
                                message: "Would you like to purchase this item(s)?"
                            }
                        ]).then(function (continuePurchase) {
                            if (continuePurchase.choice) {
                                console.log("Your transaction is complete. Your item(s) will ship out in 3-5 business days.")
                                console.log("Thanks for shopping at Bamazon! See you again soon!")
                                console.log("----------------------------------------------------------------------------------------------------------------------------------")
                                connection.end();
                            } else {
                                mainMenu();
                            }
                        })
                }
            })

            var updateInventory = function () {
                // var inventoryQty = connection.query("SELECT stock_quantity FROM products")
                // var purchasedAmt = answer.selectQty
                // var updatedInventory = inventoryQty - purchasedAmt

            var updateInventory = connection.query("UPDATE products SET stock_quantity =", + res.stock_quantity - answer.selectQty) + "WHERE item_id = " + item_id;

            connection.query(updateInventory, function(err, data){
                if (err) throw err;
            })
        }//end of updated inventory func

        updateInventory()

        })//end of user's transaction


}//end of startBamazon function



//runs if the user decides not to purchase the item in their cart
function mainMenu() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Would you like to place another order?"
            }
        ]).then(function (answer) {//response is boolean only
            if (answer.choice) { //if true, run func
                startBamazon();
            } else {
                console.log("Thanks for shopping at Bamazon. See you soon!")
                connection.end();
            }
        })
}
