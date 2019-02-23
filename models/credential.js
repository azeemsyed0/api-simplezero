const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Credential = sequelize.define('Credential', {
  
  id: {
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },

  name:{
    type: Sequelize.STRING,
    allowNull: true,
    unique:false
  },

  email:{
    type: Sequelize.STRING,
    allowNull: true,
    unique:false
  },
  
  password:{
    type: Sequelize.STRING,
    allowNull: true,
    unique:false
  }
});

module.exports = Credential;
