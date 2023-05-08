import bcrypt from "bcrypt"
import { generateToken, loginService } from "../services/auth.service.js"


const login = async (req, res) => {
    try {
        // PEGAR CAMPOS DO FORM PELO BODY
        const { email, password } = req.body
        
        // BUCAR USUARIO NO SERVICE PELO EMAIL
        const user = await loginService(email)

        // SE O EMAIL DO USUÁRIO NÃO FOR CORRETA OU NÃO EXISTIR ENVIA MSG DE ERRO
        if(!user){
            return res.status(404).send({message: "Usuário ou senha inválidos!"})
        }

        // COMPARAR SENHA PARA LOGIN
        const isValidPassword = bcrypt.compareSync(password, user.password)
        
        // SE A SENHA NÃO FOR CORRETA ENVIA MSG DE ERRO
        if(!isValidPassword){
            return res.status(404).send({message: "Usuário ou senha inválidos!"})
        }

        // GERA O TOKEN PELO ID 
        const token = generateToken(user.id)
        // ENVIA O TOKEN PARA O CLIENTE
        res.send({token})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export { login }

