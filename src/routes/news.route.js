import { Router } from "express"
import { create, findAll, findById, topNews, searchByTitle, byUser } from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middlewares.js"

const router = Router()

// ROTA PARA CRIAR USUÁRIO
router.post('/', authMiddleware, create)
// ROTA PARA BUSCAR TODOS OS USUÁRIOS
router.get("/", findAll)
// ROTA PARA BUSCAR A NOTICIA EM DESTAQUE
router.get("/top", topNews)
// ROTA DE SEARCH PELO TITULO
router.get("/search", searchByTitle)
// ROTA PARA BUSCAR NEWS DE UM USER PELO ID DO TOKEN
router.get("/byUser", authMiddleware, byUser)

// ROTA PARA BUSCAR UMA NOTICIA PELO ID
router.get("/:id", authMiddleware, findById)


export default router