const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Menu} = require('./Menu')
const {MenuItem} = require('./MenuItem')


class Restaurant extends Model {
    // static idCounter = 1
    // constructor(name, imageLink) {
    //     super()
    //     this.restaurantId = this.constructor.idCounter
    //     this.name = name
    //     this.imageLink = imageLink
    //     this.menus = []
    //     this.constructor.idCounter++
    // }

    // getMenus() {
    //     return this.menus
    // }

    // addMenu(menu) {
    //     this.menus.push(menu)
    // }
}

//this creates the restaurant data model
Restaurant.init({
    name: DataTypes.STRING,
    imageLink: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

//this establishes the realationships between tables
Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurantId'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurantId'})
Menu.hasMany(MenuItem, {as: 'items', foreignKey: 'menuId'});
MenuItem.belongsTo(Menu, {foreignKey: 'menuId'});

module.exports = {
    Restaurant
};