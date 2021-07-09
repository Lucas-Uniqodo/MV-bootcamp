const {sequelize} = require('../src/sequelize_index');
const {MenuItem} = require('../src/MenuItem')

describe('MenuItem', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a MenuItem', async () => {
        const menuItem = await MenuItem.create({ name: 'burger', price: 5.99, menuId: 1 })
        expect(menuItem.id).toBe(1)
    })
})
