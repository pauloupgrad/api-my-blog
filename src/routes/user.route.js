const route = require('express').Router()
const userControler = require('../controllers/user.controller')


route.post('/', userControler.create)

module.exports = route