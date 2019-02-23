const Sequelize = require('sequelize');

const sequelize = new Sequelize('simple-0-dev-db','postgres', 'password', {
  dialect: 'postgres',
  operatorsAliases: false 
});
sequelize.sync({
	// force: true
})
 .then(() => console.log("tables created"),(err) => console.log(err));

module.exports = sequelize;