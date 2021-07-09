const {sequelize} = require('../src/sequelize_index');
const {Restaurant} = require('../src/Restaurant');
const {Menu} = require('../src/Menu');
const {MenuItem} = require('../src/MenuItem')


describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true }); //force drops all tables each time it's run
    })
    
    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds123', image: 'http://some.image.url'})
        console.log(restaurant)
        const menu = await Menu.create({title: 'set 1', restaurantId: 1});
        const menuItem = await MenuItem.create({name: 'egg', price: 2.00});


        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();


        await menus[0].addMenuItem(menuItem);
        const menuItems = await menus[0].getMenuItems();


        expect(menuItems.length).toBe(1);

        expect(menus[0].title).toBe('set 1');
    })

})