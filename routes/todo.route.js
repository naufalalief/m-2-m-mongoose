const express = require('express');
const { getAllTodo, getTodoById, createTodo, deleteTodo } = require('../controllers/todo.controller');
const route = express.Router();

route.get('/', getAllTodo);
route.get('/:id', getTodoById);
route.post('/', createTodo);
route.delete('/:id', deleteTodo);

module.exports = route;