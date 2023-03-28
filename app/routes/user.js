const express = require('express');

const routers = express. Router();


const userController = require('../controllers/user_controler');


routers.get('/findUsuarios', userController.findUsuario) 
routers.post('/setUsuario', userController.setUsuario)


module.exports = [routers]