// IMPORTS
const express = require('express')
const app = express()
const connectDatabase = require('./src/database/db')

const userRoute = require('./src/routes/user.route')

// CONSTANTES
const PORT = 3000

connectDatabase()

// ROTAS
app.use(express.json())
app.use('/user',userRoute)


// INICIALIZAÇÃO
app.listen(PORT, () =>
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
)