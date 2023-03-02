const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
   
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
        await Restaurant.bulkCreate(seedRestaurant).then(() => {console.log('database created sucessfully')},(err)=> {console.error(err)})
        await Menu.bulkCreate(seedMenu).then(() => {console.log('database created sucessfully')},(err)=> {console.error(err)})
        
    });

    test('can create a Restaurant', async () => {
       
        const testRestaurant = await Restaurant.create({
            name: 'EppleBaas...2!!',
            location: 'Taxes',
            cuisine: 'SlowFood',
            rating: 5
        })
        expect(testRestaurant.name).toEqual('EppleBaas...2!!');
        expect(testRestaurant.location).toBe("Taxes");
        expect(testRestaurant.cuisine).toBe("SlowFood");
        expect(testRestaurant.rating).toBe(5)
    });
    test('can create a Menu', async () => {
       
        const testMenu = await Menu.create({
            title: "appeetsizers"
        });
        expect(testMenu.title).toEqual("appeetsizers");
    });

    test('can find Restaurants', async () => {
        const restuarants = await Restaurant.findAndCountAll();
        expect(restuarants.count).toEqual(4)
        expect(restuarants.rows[3].name).toBe("EppleBaas...2!!")
        expect(restuarants.rows[3].rating).toBe(5)
    });

    test('can find Menus', async () => {
        const menus = await Menu.findAndCountAll();
        expect(menus.count).toEqual(4)
        expect(menus.rows[3].title).toBe("appeetsizers")
    });

    test('can delete Restaurants', async () => {
        const deleteMe = await Restaurant.findByPk(4);
        await deleteMe.destroy();
        const restuarants = await Restaurant.findAndCountAll();
        expect(restuarants.count).toEqual(3)
    });
    test('can delete Menus', async () => {
        const deleteMe = await Menu.findByPk(4)
        await deleteMe.destroy()
        const menus = await Menu.findAndCountAll();
        expect(menus.count).toEqual(3)
    });
})