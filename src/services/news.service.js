import News from '../models/News.js'


// SERVIÇO PARA CADASTRAR NOTICIA NO BANCO
const createService = (body) => News.create(body)
// SERVIÇO PARA BUSCAR TODOS AS NOTICIAS NO BANCO
const findAllService = () => News.find()


export {
    createService,
    findAllService,    
}