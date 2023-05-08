import News from '../models/News.js'


// SERVIÇO PARA CADASTRAR NOTICIA NO BANCO
const createService = (body) => News.create(body)
// SERVIÇO PARA BUSCAR TODOS AS NOTICIAS NO BANCO
const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user")
// BUSCA A QUANTIDADE DE NOTICIAS DO BANCO 
const countNews = () => News.countDocuments()


export {
    createService,
    findAllService, 
    countNews,   
}