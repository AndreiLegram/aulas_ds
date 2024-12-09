// Importando as dependências do projeto
const express = require('express');
const routes = express.Router();

// Referencia o Controller CourseController
const CourseController = require('./controllers/CourseController');
// associa as rotas ao seu método do Controller
routes.get('/courses',CourseController.index);
routes.get('/courses/:id',CourseController.show);
routes.post('/courses',CourseController.store);
routes.put('/courses/:id',CourseController.update);
routes.delete('/courses/:id',CourseController.delete);
module.exports = routes;