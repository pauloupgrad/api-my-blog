const userService = require("../services/user.service")

// CREATE - CRIA UM USUÁRIO NO BANCO
const create = async (req, res) => {
   // Desistrutura todos os campos enviados do form 
   const { name, username, email, password, avatar, background } = req.body

   // verifica se todos os campos estao preenchidos
   if (!name || !username || !email || !password || !avatar || !background) {
      res.status(400).send({ message: "Envie todos os campos para registro" })
   }

   // Envia todos os usuários para o service cadastrar no banco 
   const user = await userService.createService(req.body)

   // Verifica se o cadastro foi com sucesso se não manda uma menssagem de erro
   if (!user) {
      return res.status(400).send({ message: "Erro ao criar usuário" })
   }

   // Manda todos os usuarios e mensagem de sucesso no cadastro
   res.status(201).send({
      message: "Usuário criado com sucesso!",
      user: {
         id: user._id,
         name,
         username,
         email,
         avatar,
         background
      }
   })
}

// BUSCA TODOS OS USUÁRIOS NO BANCO
const findAll = async (req, res) => {

   // Busca todos os usuários no service
   const users = await userService.findAllService()

   // Verifica se os usuários existe
   if (users.length === 0) {
      return res.status(400).send({ message: "Não há usuários cadastrados!" })
   }

   // Manda os usários encontrados no banco 
   res.status(200).send(users)
}

// BUSCA UM USUÁRIO NO BANCO PELO ID
const findById = async (req, res) => {

   // Pega o parametro
   const id = req.params.id

   // Busca o usuario pelo id no service
   const user = await userService.findByIdService(id)

   // Manda o usuário encontrado no banco
   res.status(200).send(user)
}
// ATUALIZAR USUÁRIO NO BANCO PELO ID
const update = async (req, res) => {
   // Desistrutura todos os campos enviados do form 
   const { name, username, email, password, avatar, background } = req.body

   // verifica se todos os campos estao preenchidos
   if (!name && !username && !email && !password && !avatar && !background) {
      res.status(400).send({ message: "Envie um dos campos para ser atualizado" })
   }

   // Pega o parametro
   const id = req.params.id

   // Busca o usuario pelo id no service
   const user = await userService.findByIdService(id)

   await userService.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
   )

   res.send({ message: "Usuário atualizado com sucesso!" })

}
// DELETAR UM USUÁRIO DO BANCO PELO ID
const deleteUser = async (req, res) => {
   // Pega o parametro
   const id = req.params.id
   // Busca o usuario pelo id no service
   const user = await userService.deleteUserService(id)
   // Retorna mensagem para o usuário
   res.send({ message: "Usuário deletado com sucesso!" })
}

module.exports = { create, findAll, findById, update, deleteUser }