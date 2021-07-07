const sqlite3 = require('sqlite3').verbose();
/**
 * This code creates the tables for the Restaurants assignment
 */
function initialise() {
    // connect to a database named restaurants.sqlite
    const db = new sqlite3.Database('./restaurants.sqlite');
    try {
        db.serialize(function () { // serialize means execute one statement at a time
            console.log('starting table creation');
            // delete tables if they already exist
            db.run("select * from Restaurants WHERE name = \"Pizza Express\";"); 
            // TODO - do the same for the other tables
        });
    } finally {
        // very important to always close database connections
        // else could lead to memory leaks
        db.close();
        console.log('table creation complete - connection closed');
    }
}
module.exports = initialise;
// local testing (comment out if running tests from jest)
initialise();


