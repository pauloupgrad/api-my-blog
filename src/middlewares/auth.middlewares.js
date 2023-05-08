import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import userService from "../services/user.service.js"

dotenv.config()

export const authMiddleware = (req, res, next) => {

    try { // HEADERS
        const { authorization } = req.headers

        if (!authorization) {
            return res.status(401).send({ message: "Não Autorizado: Este usuário!!" })
        }

        const parts = authorization.split(" ")
        // console.log(parts)

        if (parts.length !== 2) {
            return res.status(401).send({ message: "Não Autorizado: incompleto!!" })
        }

        const [schema, token] = parts

        if (schema !== "Bearer") {
            return res.status(401).send({ message: "Não Autorizado: Bearer!!" })
        }

        // Verificar se o token enviado eo mesmo que o token do headers
        jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
            if (error) {
                return res.status(401).send({ message: "Token inválido!" })
            }

            const user = await userService.findByIdService(decoded.id)

            if (!user || !user.id) {
                return res.status(401).send({ message: "Token Inválido!" })
            }

            req.userId = user.id

            return next()
        })
        
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}