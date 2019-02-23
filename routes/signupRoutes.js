const express = require('express');
const UserController = require('../controllers/signupController');

const userRoutes = () => {
  const userRoutes = express.Router();
  userRoutes.get('/api/users', UserController.usersList);
  userRoutes.post('/api/users', UserController.createUser);
  userRoutes.get('/api/users/:email', UserController.getUserByEmail);
  return userRoutes;
}

module.exports = userRoutes;
