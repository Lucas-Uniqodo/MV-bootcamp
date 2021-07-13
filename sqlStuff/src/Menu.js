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


let array = [1,2,3,4,5,6,7,8,9,10]