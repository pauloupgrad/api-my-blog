import mongoose from "mongoose"
import userService from "../services/user.service.js"

// VALIDA O ID DO BANCO MONGODB
export const isValidId = (req, res, next) => {
    try { // Pega o parametro
        const id = req.params.id

        // Verifica se o id do mongo é válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "ID Invalido!" })
        }

        next()
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
// VALIDA SE O USUÁRIO EXISTE
export const isValidUser = async (req, res, next) => {
    try {// Pega o parametro
        const id = req.params.id

        // Busca o usuario pelo id no service
        const user = await userService.findByIdService(id)

        // Verifica se o usuário existe
        if (!user) {
            return res.status(400).send({ message: "Usuários não existe!" })
        }

        req.id = id
        req.user = user

        next()
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}