const {sequelize, DataTypes, Model} = require('./sequelize_index');

class MenuItem extends Model {
    // static idCounter = 1
    // constructor(title, price, menuId) {
    //     super()
    //     this.menuItemId = this.constructor.idCounter
    //     this.name = title
    //     this.price = price
    //     this.menuId = menuId
    //     this.constructor.idCounter++
    // }

}



MenuItem.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    menuId: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    MenuItem
};