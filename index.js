// IMPORTS
import express from "express"
import dotenv from "dotenv"

import connectDatabase from "./src/database/db.js"
import userRoute from "./src/routes/user.route.js"
import authRoute from "./src/routes/auth.route.js"

dotenv.config()

const app = express()

// CONSTANTES
const port = process.env.PORT || 3000
// CONEXÃO COM O BANCO DE DADOS
connectDatabase()
// ROTAS
app.use(express.json())
app.use("/user", userRoute)
app.use("/auth", authRoute)


// INICIALIZAÇÃO
app.listen(port, () =>
    console.log(`Servidor rodando em: http://localhost:${port}`)
)