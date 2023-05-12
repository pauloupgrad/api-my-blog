import News from '../models/News.js'


// SERVIÇO PARA CADASTRAR NOTICIA NO BANCO
export const createService = (body) => News.create(body)
// SERVIÇO PARA BUSCAR TODOS AS NOTICIAS NO BANCO
export const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user")
// SERVIÇO PARA BUSCAR UMA NOTICIA NO BANCO POR ID
export const findByIdService = (id) => News.findById(id).populate("user")
// BUSCA A QUANTIDADE DE NOTICIAS DO BANCO 
export const countNews = () => News.countDocuments()
// BUSCA A NOTICIA DESTAQUE NO BANCO
export const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user")
// FAZ PESQUIZA NO BANCO PELO TITULO DA NEWS
export const searchByTitleService = (title) => News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
}).sort({ _id: -1 }).populate("user")
// BUSCA NO BANCO TODAS NEWS DO USER LOGADO
export const byUserService = (id) => News.find({
    user: id
}).sort({ _id: -1 }).populate("user")