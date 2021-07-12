
// Use the instructions above to create a web server running on port 3000, serving static content from a public directory within your project

// Validate that you see the files being loaded in the Network section of your browser's Developer Tools. Look at the HTTP status codes, what happens to them when you refresh?

// Now try creating additional HTML pages and link them using anchor tags e.g.

// <a href="/about.html">About me</a>
// Commit your code into Github and share the link with your coach for review

// const sequelize = require('sequelize');
// const connection = require('./sequelize-connection');
const express = require('express');
const connection = require('./sequelize-connect');

const Restaurant = require('./models/Restaurant');
const Menu = require('./models/Menu');
const MenuItem = require('./models/MenuItem');

const { ConnectionError } = require('sequelize');


const app = express();
const port = 3000;

app.use(express.json());

//this establishes the realationships between tables
Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurantId'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurantId'})
Menu.hasMany(MenuItem, {as: 'menuItems', foreignKey: 'menuId'});
MenuItem.belongsTo(Menu, {foreignKey: 'menuId'});

connection
    .sync()
    .then(() => {
    console.log('Connected to DB');
    })
    .catch((err) => {
    console.error('Unable to connect:', err);
    });


app.use(express.static('public'));

app.get("/flipcoin", (request, response) => {
    let rand = ((Math.random() >= 0.5) ? 'heads' : 'tails'); 
    response.send(rand);
});

app.post("/restaurants", async (request, response) => {
    const restaurant = await Restaurant.create({
        name: require.body.name,
        email: require.body.email,
        password: require.body.password,
    });
    response.json(user);
});

app.get("/restaurants", (request, response) => {
    response.send("READ all restaurants");
});

app.put("/restaurants", (request, response) => {
    response.send("UPDATE all restaurants");
});

app.delete("/restaurants", (request, response) => {
    response.send("DELETE all restaurants");
});

app.get("/restaurants/:id", (request, response) => {
    response.send("READ one restaurants");
});

app.put("/restaurants/:id", (request, response) => {
    response.send("UPDATE one restaurants");
});

app.delete("/restaurants/:id", (request, response) => {
    response.send("DELETE one restaurants");
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})


// When a browser makes a GET request to http://localhost:3000/restaurants this endpoint should respond with the full array of restaurant objects. 

// Push your code to Github and share the link with your coach for review

