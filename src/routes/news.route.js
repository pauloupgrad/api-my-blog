import { Router } from "express"
import { create, findAll, findById, topNews } from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js"

const router = Router()

// ROTA PARA CRIAR USUÁRIO
router.post('/', authMiddleware, create)
// ROTA PARA BUSCAR TODOS OS USUÁRIOS
router.get("/", findAll)
// ROTA PARA BUSCAR A NOTICIA EM DESTAQUE
router.get("/top", topNews)
// BUSCA UMA NOTICIA PELO ID
router.get("/:id", findById)


export default router