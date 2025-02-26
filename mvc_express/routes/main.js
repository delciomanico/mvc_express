const express =  require("express");
const route = express();

// chamada do controller
const UsuarioController = require("../controllers/UsuarioController");


// exemplo de uso de controller
route.get("/teste", UsuarioController.teste);


module.exports = route;