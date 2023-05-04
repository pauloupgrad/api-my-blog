const create = (req, res) => {
   const { name, username, email, password, avatar, background } = req.body
   
   if(!name || !username ||!email ||!password ||!avatar ||!background){
      res.status(400).send({message:"Envie todos os campos para registro"})
   }
   res.status(201).send({
      message: "Usuário criado com sucesso!",
      user: {
         name,
         username,
         email,        
         avatar,
         background
      }
   })
}

module.exports = { create }