const sqlite3 = require('sqlite3').verbose();
/**
 * This code inserts some rows in the tables for the Restaurants assignment
 */
function insert() {
    // connect to a database named restaurants.sqlite
    const db = new sqlite3.Database('./restaurants.sqlite');
    try {
        db.serialize(function () { // serialize means execute one statement at a time
            console.log('inserting some data');
            let stmt;
            // insert a row into the Restaurants table
            try {
                // for security reasons - very important to use a 
                // prepared statement here
                stmt = db.prepare(`INSERT INTO Restaurants (name, location) VALUES (?, ?)`);
                stmt.run("Pizza Express", "UK");
            } finally {
                // IMPORTANT! Close the statement
                stmt.finalize();
            }


            // insert a row into the Menus table
            try {
                stmt = db.prepare(`INSERT INTO Menus (name, forKids, vegetarian, vegan, RestaurantsId) VALUES (?, ?, ?, ?, ?)`);
                stmt.run("vegan menu", 0, 1, 1, 1);
                stmt.run("main menu", 0, 0, 0, 1);
            } finally {
                stmt.finalize();
            }


            // insert a row into the MenuItems table
            try {
                stmt = db.prepare(`INSERT INTO MenuItems (name, description, price, menuId) VALUES (?, ?, ?, ?)`);
                stmt.run("VEGAN GIARDINIERA", "Artichoke, mushrooms, red onion and black olives, with tomato, vegan mozzarella alternative, garlic oil and parsley on a Romana base", 10.99, 1);
                stmt.run("SLOPPY VEGAN CLASSIC", "Quorn™ pieces with green pepper, red onion, tomato, smoky chilli, garlic oil, vegan mozzarella alternative and parsley.", 9.99, 1);
                stmt.run("BBQ BURNT ENDS", "Slow-cooked beef brisket with a hint of chipotle, sweet & smoky bbq sauce, mozzarella and red onions, topped with roasted tomatoes and parsley.", 12.99, 2);
                stmt.run("FUNGHI DI BOSCO", "Portobello mushrooms, tomato with garlic, mozzarella and rosemary, topped with parsley and Gran Milano cheese.", 11.99, 1);
            } finally {
                stmt.finalize();
            }
        });
    } finally {
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
        console.log('table insert complete - connection closed');
    }
}
module.exports = insert;
// local testing (comment out if running tests from jest)
insert();