import { createService, findAllService, countNews, topNewsService, findByIdService } from '../services/news.service.js'


// CREATE - CRIA UM NEWS NO BANCO
export const create = async (req, res) => {
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
export const findAll = async (req, res) => {
    try {
        let { limit, offset } = req.query

        limit = Number(limit)
        offset = Number(offset)

        if (!limit) {
            limit = 5
        }
        if (!offset) {
            offset = 0
        }

        // Busca todos os usuários no service
        const news = await findAllService(offset, limit)
        const total = await countNews()
        const currentUrl = req.baseUrl

        const next = offset + limit
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null

        const previus = offset - limit < 0 ? null : offset - limit
        const previusUrl = previus != null ? `${currentUrl}?limit=${limit}&offset=${previus}` : null

        // Verifica se os usuários existe
        if (news.length === 0) {
            return res.status(400).send({ message: "Não há notícias cadastrados!" })
        }
        // Manda os usários encontrados no banco 
        res.status(200).send({
            nextUrl,
            previusUrl,
            limit,
            offset,
            total,

            results: news.map(newsItem => ({
                id: newsItem._id,
                title: newsItem.title,
                text: newsItem.text,
                banner: newsItem.banner,
                likes: newsItem.likes,
                comments: newsItem.comments,
                name: newsItem.user.name,
                username: newsItem.user.username,
                useravatar: newsItem.user.avatar,

            }))
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// BUSCA UMA NOTICIA NO BANCO PELO ID
export const findById = async (req, res) => {
    try {
        // Pega o id pelo parametro
        const { id } = req.params

        // Busca o noticia pelo id no service
        const news = await findByIdService(id)

        // Verifica se a noticia existe
        if (!news) {
            return res.status(400).send({ message: "Esta noticia não existe!" })
        }
        // Manda o noticia encontrado no banco para o cliente
        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                useravatar: news.user.avatar,
            }
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// BUSCA A NOTICIA DESTAQUE
export const topNews = async (req, res) => {
    try {
        // Busca a noticia destaque no service
        const news = await topNewsService()
        // Verifica se a noticia destaque existe
        if (!news) {
            return res.status(400).send({ message: "Esta noticia não existe!" })
        }
        // Manda para o cliente
        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                useravatar: news.user.avatar,
            }
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}



