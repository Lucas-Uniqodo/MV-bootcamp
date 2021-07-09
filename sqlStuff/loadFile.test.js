const sqlite3 = require('sqlite3').verbose();
const loadAndPrint = require('./loadFile')
const db = new sqlite3.Database('./restaurants.sqlite');


describe('SQLite3', () => {
    beforeAll(done => {
        db.run("CREATE TABLE IF NOT EXISTS Restaurants (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)", done);
    })
    test('Restaurants are loaded into the database', (done) => {
        loadAndPrint(() => {
            db.all('SELECT * FROM Restaurants LIMIT 3;', (err, row) => {
                expect(row.length).toBe(3)
                expect(row[0].name).toBe('Bayroot')
                db.get('SELECT COUNT(id) AS total FROM Restaurants;', (err, count) => {
                    expect(count.total).toBe(8)
                    done()
                })
            })
        })
    })
})