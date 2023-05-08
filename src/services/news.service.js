import News from '../models/News.js'


// SERVIÇO PARA CADASTRAR NOTICIA NO BANCO
export const createService = (body) => News.create(body)
// SERVIÇO PARA BUSCAR TODOS AS NOTICIAS NO BANCO
export const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user")
// SERVIÇO PARA BUSCAR UMA NOTICIA NO BANCO POR ID
export const findByIdService = (id) => News.findById(id).populate("user")
// BUSCA A QUANTIDADE DE NOTICIAS DO BANCO 
export const countNews = () => News.countDocuments()
// BUSCA A NOTICIA DESTAQUE NO BANCO
export const topNewsService = () => News.findOne().sort({_id: -1}).populate("user")

