const Sequelize = require("sequelize");
 
const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPWD, {
 host: process.env.DBHOST,
 dialect: process.env.DBDIALECT,
 logging: false
});
 
// sequelize.authenticate()
// .then(() => {
//  console.log("DB connected!");
//     // db.sync().then(res => {
//     //     }).catch(err => {
//     //         console.error(err.message);
//     // });

// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.menu = require("./Menu.js")(sequelize, Sequelize);
db.tables = require("./Tables.js")(sequelize, Sequelize);
db.waiters = require("./Waiters.js")(sequelize, Sequelize);
db.order = require("./Order.js")(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
    if('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
}); 

module.exports = db;