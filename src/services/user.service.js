import User from "../models/User.js"

// SERVIÇO PARA CADASTRAR USUÁRIO NO BANCO
const createService = (body) => User.create(body)
// SERVIÇO PARA BUSCAR TODOS OS USUÁRIOS NO BANCO
const findAllService = () => User.find()
// SERVIÇO PARA BUSCAR UM USUÁRIO NO BANCO POR ID
const findByIdService = (id) => User.findById(id)
// SERVIÇO PARA ATUALIZAR USUÁRIO NO BANCO POR ID
const updateService = (
    id, name, username, email, password, avatar, background
) => User.findOneAndUpdate(
    { _id: id },
    { name, username, email, password, avatar, background }
)
// SERVIÇO PARA DELETAR UM USUÁRIO NO BANCO POR ID
const deleteUserService = (id) => User.findOneAndDelete({ _id: id })

export default {
    createService,
    findAllService,
    findByIdService,
    updateService,
    deleteUserService
}