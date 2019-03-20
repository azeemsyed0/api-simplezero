const Sequelize = require('sequelize');
const config = require('config');

const db = config.get('dbConfig');

const sequelize = new Sequelize(db.dbName,db.username, db.password, {
  host: db.host,
  dialect: db.dialect,
  operatorsAliases: false 
});
sequelize.sync({
	// force: true
})
 .then(() => console.log("tables created"),(err) => console.log(err));

module.exports = sequelize;