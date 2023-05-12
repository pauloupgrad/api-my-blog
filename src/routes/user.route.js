import { Router } from "express"
import userControler from "../controllers/user.controller.js"
import { isValidId, isValidUser } from "../middlewares/global.middlewares.js"

const router = Router()

// ROTA PARA CRIAR USUÁRIO
router.post('/', userControler.create)
// ROTA PARA BUSCAR TODOS OS USUÁRIOS
router.get("/", userControler.findAll)
// ROTA PARA BUSCAR UM USUÁRIO POR ID
router.get("/:id", isValidId, isValidUser, userControler.findById)
// ROTA PARA ATUALIZAR USUÁRIO POR ID
router.patch("/:id", isValidId, isValidUser, userControler.update)
// ROTA PARA DELETAR UM USUÁRIO POR ID
router.delete("/:id", isValidId, isValidUser, userControler.deleteUser)


export default router