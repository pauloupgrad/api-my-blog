const route = require('express').Router()
const userControler = require('../controllers/user.controller')

// ROTA PARA CRIAR USUÁRIO
route.post('/', userControler.create)
// ROTA PARA BUSCAR TODOS OS USUÁRIOS
route.get("/", userControler.findAll)
// ROTA PARA BUSCAR UM USUÁRIO POR ID
route.get("/:id", userControler.findById)
// ROTA PARA ATUALIZAR USUÁRIO POR ID
route.patch("/:id", userControler.update)
// ROTA PARA DELETAR UM USUÁRIO POR ID
route.delete("/:id", userControler.deleteUser)

module.exports = route