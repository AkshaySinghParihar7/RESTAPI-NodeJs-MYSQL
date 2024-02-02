const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('gojurisnew','root','',{
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate()
.then(() =>{
    console.log('Connection has been established successfully.');
})
.catch((error) =>{
    console.error('Unable to connect to the database:', error);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.plans = require('./planModel.js')(sequelize, DataTypes);

const syncDatabase = async () => {
    try {
        await db.sequelize.sync({ force: false });
        console.log('Yes - re-sync done!');
    } catch (error) {
        console.error('Error syncing the database:', error);
    }
};

syncDatabase();
module.exports = db;