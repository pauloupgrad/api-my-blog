import { Router } from "express"
import { create, findAll } from "../controllers/news.controller.js"

const router = Router()

// ROTA PARA CRIAR USUÁRIO
router.post('/', create)
// ROTA PARA BUSCAR TODOS OS USUÁRIOS
router.get("/", findAll)


export default router