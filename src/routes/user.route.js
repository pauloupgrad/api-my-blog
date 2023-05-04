const route = require('express').Router()
const userControler = require('../controllers/user.controller')


route.get('/soma', userControler.soma)

module.exports = route