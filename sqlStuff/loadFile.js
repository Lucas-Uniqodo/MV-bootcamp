const fsp = require('fs').promises; // Node.js file system module with promises
const db = require('./readFromDB');
/**
 * This code illustrates how to load JSON data into an array.
 * 
 */
async function loadAndPrint() {
    // wait for the json file to be read
    try {
        const rawData = await fsp.readFile('./restaurants.json');
        // convert the file data into JS objects (arrays)
        const restaurantsArray = (JSON.parse(String(rawData)));
        console.log("array is length: "+restaurantsArray.length);

        // printing each restaurant, menu and menu item using regular for loops

        // for (restaurant=0; restaurant<restaurantsArray.length; restaurant++) {
        //     console.log("\n"+restaurantsArray[restaurant].name);

        //     for (x=0; x<restaurantsArray[restaurant].menus.length; x++) {
        //         console.log("   ", restaurantsArray[restaurant].menus[x].title);

        //         for (y=0; y<restaurantsArray[restaurant].menus[x].items.length; y++) {
        //             console.log("       ", restaurantsArray[restaurant].menus[x].items[y].name);
        //         }

        //     }

        // }

        //using foreach loops - works the same, but i find these more readable, and overall prefer them :)

        restaurantsArray.forEach(restaurant => {
            console.log("\n"+restaurant.name)

            restaurant.menus.forEach(menu => {
                console.log("\n   ", menu.title);

                menu.items.forEach(item => {
                    console.log("       ", item.name);
                });

            });

        });


    } catch (error) {
        // if we get here, our file read has filed
        console.error('problem reading the file'+ error);
    }
}
// main flow
loadAndPrint();