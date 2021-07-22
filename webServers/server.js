// copy over loadFile.js and restaurants.json from your sqlStuff folder to your web server folder -
// edit loadFile.js to use restaurants-seq.sqlite (line 7)
// run node server.js then ctrl-c and run node loadFile.js - this should populate your database with seed data

const express = require("express");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
	allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const connection = require("./sequelize-connect");

const Restaurant = require("./models/Restaurant");
const Menu = require("./models/Menu");
const MenuItem = require("./models/MenuItem");

const app = express();
const port = 3000;

// setup our templating engine
const handlebars = expressHandlebars({
	handlebars: allowInsecurePrototypeAccess(Handlebars),
});

app.engine("handlebars", handlebars);
app.set("view engine", "handlebars");
app.use(express.json());

//this establishes the realationships between tables
Restaurant.hasMany(Menu);
Menu.belongsTo(Restaurant);
Menu.hasMany(MenuItem);
MenuItem.belongsTo(Menu);

connection
	.sync({
		//refreshs database every time server is rerun
		// force: true
	})
	.then(() => {
		console.log("Connected to DB");
	})
	.catch((err) => {
		console.error("Unable to connect:", err);
	});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/flipcoin", (request, response) => {
	let rand = Math.random() >= 0.5 ? "heads" : "tails";
	response.status(200).send(rand);
});

//create Restaurant
app.post("/restaurants", async (request, response) => {
	// if (request.body.name && request.body.imageLink) {
	const restaurant = await Restaurant.create({
		name: request.body.name,
		imageLink: request.body.imageLink,
	});
	response.redirect("/restaurants");
	// } else {
	// don't know what status code to use here, 418 as placeholder
	// response
	// .status(418)
	// .json("ERROR, RESTAURANT MUST HAVE NAME AND IMAGELINK");
	// }
});

//read Restaurant
app.get("/restaurants", async (request, response) => {
	const restaurants = await Restaurant.findAll();
	if (!restaurants) {
		return response.status(404).send("NOT FOUND");
	}
	console.log("the length is " + restaurants.length);

	response.render("restaurants", { restaurants });
	// response.status(200).send(restaurants);
});

app.get("/restaurants/form", async (request, response) => {
	response.render("form");
});

app.get("/restaurants/:id", async (request, response) => {
	const restaurant = await Restaurant.findByPk(request.params.id);
	console.log(restaurant);
	if (!restaurant) {
		return response.status(404).send("NOT FOUND");
	}

	response.status(200).send(restaurant);
});

app.get("/restaurants/:id/menus", async (request, response) => {
	const restaurant = await Restaurant.findOne({
		where: { id: request.params.id },
		include: [
			{
				model: Menu,
				include: [MenuItem],
			},
		],
	});
	if (!restaurant) {
		return response.status(404).send("NOT FOUND");
	}
	response.render("menus", { restaurant });
	// response.status(200).send(restaurant);
});

app.get("/restaurants/:id/updateform", async (request, response) => {
	const restaurant = await Restaurant.findByPk(request.params.id);
	console.log(restaurant);
	response.render("updateform", { restaurant });
});

//update Restaurant
app.post("/restaurants/:id/update", async (request, response) => {
	const restaurant = await Restaurant.findByPk(request.params.id);
	console.log(request.body);
	if (!restaurant) {
		return response.status(404).send("NOT FOUND");
	}

	await Restaurant.update(
		{
			name: request.body.name,
			imageLink: request.body.imageLink,
		},
		{
			where: { id: request.params.id },
		}
	);
	response.redirect("/restaurants");
});

//delete Restaurant

app.get("/restaurants/:id/delete", async (request, response) => {
	const restaurant = await Restaurant.findByPk(request.params.id);
	if (!restaurant) {
		return response.status(404).send("NOT FOUND");
	}

	await Restaurant.destroy({
		where: { id: request.params.id },
	});
	response.redirect("/restaurants");
	// response.status(200).send(restaurant);
});

//create Menu
app.post("/menus", async (request, response) => {
	if (request.body.title && request.body.restaurantId) {
		const menu = await Menu.create({
			title: request.body.title,
			restaurantId: request.body.restaurantId,
		});
		response.status(201).json(menu);
	} else {
		//don't know what status code to use here, 418 as placeholder
		response
			.status(418)
			.json("ERROR, MENU MUST HAVE title AND restaurantId");
	}
});

//read Menu
app.get("/menus", async (request, response) => {
	const menus = await Menu.findAll();
	if (!menus) {
		return response.status(404).send("NOT FOUND");
	}

	response.status(200).send(menus);
});

app.get("/menus/:id", async (request, response) => {
	const menu = await Menu.findByPk(request.params.id);
	if (!menu) {
		return response.status(404).send("NOT FOUND");
	}

	response.status(200).send(menu);
});

app.get("/menus/:id/menuItems", async (request, response) => {
	const menuItems = await Menu.findAll({
		where: { id: request.params.id },
		include: [MenuItem],
	});
	if (!menuItems) {
		return response.status(404).send("NOT FOUND");
	}

	response.status(200).send(menuItems);
});

//update Menu
app.put("/menus/:id", async (request, response) => {
	const menu = await Menu.findByPk(request.params.id);
	if (!menu) {
		return response.status(404).send("NOT FOUND");
	}

	await Menu.update(
		{
			title: request.body.title,
			restaurantId: request.body.restaurantId,
		},
		{
			where: { id: request.params.id },
		}
	);
	response.status(200).send(menu);
});

//delete Menu
app.delete("/menus/:id", async (request, response) => {
	const menu = await Menu.findByPk(request.params.id);
	if (!menu) {
		return response.status(404).send("NOT FOUND");
	}

	await Menu.destroy({
		where: { id: request.params.id },
	});
	response.status(200).send(menu);
});

//create MenuItem
app.post("/menuItems", async (request, response) => {
	if (request.body.name && request.body.price && request.body.menuId) {
		const menuItem = await MenuItem.create({
			name: request.body.name,
			price: request.body.price,
			menuId: request.body.menuId,
		});
		response.status(201).json(menuItem);
	} else {
		//don't know what status code to use here, 418 as placeholder
		response
			.status(418)
			.json("ERROR, menuItem MUST HAVE name, price AND menuId");
	}
});

//read MenuItem
app.get("/menuItems", async (request, response) => {
	const menuItems = await MenuItem.findAll();
	if (!menuItems) {
		return response.status(404).send("NOT FOUND");
	}

	response.status(200).send(menuItems);
});

app.get("/menuItems/:id", async (request, response) => {
	const menuItem = await MenuItem.findByPk(request.params.id);
	if (!menuItem) {
		return response.status(404).send("NOT FOUND");
	}

	response.status(200).send(menuItem);
});

//update MenuItem
app.put("/menuItems/:id", async (request, response) => {
	const menuItem = await MenuItem.findByPk(request.params.id);
	if (!menuItem) {
		return response.status(404).send("NOT FOUND");
	}

	await MenuItem.update(
		{
			name: request.body.name,
			price: request.body.price,
			menuId: request.body.menuId,
		},
		{
			where: { id: request.params.id },
		}
	);
	response.status(200).send(menuItem);
});

//delete MenuItem
app.delete("/menuItems/:id", async (request, response) => {
	const menuItem = await MenuItem.findByPk(request.params.id);
	if (!menuItem) {
		return response.status(404).send("NOT FOUND");
	}

	await MenuItem.destroy({
		where: { id: request.params.id },
	});
	response.status(200).send(menuItem);
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});

// When a browser makes a GET request to http://localhost:3000/restaurants this endpoint should respond with the full array of restaurant objects.

// Push your code to Github and share the link with your coach for review
