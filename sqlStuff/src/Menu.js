const {sequelize, DataTypes, Model} = require('./sequelize_index');


class Menu extends Model {
    // static idCounter = 1
    // constructor(title, restaurantId) {
    //     super()
    //     this.menuId = this.constructor.idCounter
    //     this.title = title
    //     this.restaurantId = restaurantId
    //     this.menuItems = []
    //     this.constructor.idCounter++
    // }


    // getMenuItems() {
    //     return this.menuItems
    // }

    // addMenuItem(menuItem) {
    //     this.menuItems.push(menuItem)
    // }


}

Menu.init({
    title: DataTypes.STRING,
    restaurantId: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    Menu
};
