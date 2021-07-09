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
    addMenu() {
        
    }
}

Restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurantId'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurantId'})
Menu.hasMany(MenuItem, {as: 'items', foreignKey: 'menuId'});
MenuItem.belongsTo(Menu, {foreignKey: 'menuId'});

module.exports = {
    Restaurant
};