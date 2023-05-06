// IMPORTS
import express from "express"
import connectDatabase from "./src/database/db.js"
import userRoute from "./src/routes/user.route.js"

const app = express()

// CONSTANTES
const PORT = 3000
// CONEXÃO COM O BANCO DE DADOS
connectDatabase()
// ROTAS
app.use(express.json())
app.use("/user",userRoute)


// INICIALIZAÇÃO
app.listen(PORT, () =>
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
)