import { createService, findAllService } from '../services/news.service.js'
import { ObjectId } from 'mongoose'

// CREATE - CRIA UM NEWS NO BANCO
const create = async (req, res) => {
    try {   

        // Desistrutura todos os campos enviados do form
        const { title, text, banner } = req.body

        // verifica se todos os campos estao preenchidos
        if (!title || !text || !banner) {
            res.status(400).send({ message: "Envie todos os campos para cadastro" })
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId
        })

        res.status(201).send("News criada com sucesso!")

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// BUSCA TODOS OS USUÁRIOS NO BANCO
const findAll = async (req, res) => {
    try {

        // Busca todos os usuários no service
        const news = await findAllService()

        // Verifica se os usuários existe
        if (news.length === 0) {
            return res.status(400).send({ message: "Não há notícias cadastrados!" })
        }
        // Manda os usários encontrados no banco 
        res.status(200).send(news)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export {
    create,
    findAll,
}