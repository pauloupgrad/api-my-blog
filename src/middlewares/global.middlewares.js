const mongoose = require('mongoose')
const userService = require("../services/user.service")

// VALIDA O ID DO BANCO MONGODB
const isValidId = (req, res, next) => {
    // Pega o parametro
    const id = req.params.id

    // Verifica se o id do mongo é válido
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "ID Invalido!" })
    }

    next()
}
// VALIDA SE O USUÁRIO EXISTE
const isValidUser = async (req, res, next) => {
    // Pega o parametro
    const id = req.params.id

    // Busca o usuario pelo id no service
    const user = await userService.findByIdService(id)

    // Verifica se o usuário existe
    if (!user) {
        return res.status(400).send({ message: "Usuários não existe!" })
    }

    next()
}

module.exports = { isValidId, isValidUser }