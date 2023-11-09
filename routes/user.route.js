const express = require('express');
const { getAllUser, getUserById, createUser, deleteUser } = require('../controllers/user.controller');
const route = express.Router();

route.get('/', getAllUser);
route.get('/:id', getUserById);
route.post('/', createUser);
route.delete('/:id', deleteUser);

module.exports = route;