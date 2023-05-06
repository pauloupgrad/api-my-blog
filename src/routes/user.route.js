const route = require('express').Router()
const userControler = require('../controllers/user.controller')



route.post('/', userControler.create)
route.get("/", userControler.findAll)
route.get("/:id", userControler.findById)

module.exports = route