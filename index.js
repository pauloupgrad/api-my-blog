// IMPORTS
const express = require('express')
const userRoute = require('./src/routes/user.route')

// CONSTANTES
const app = express()
const PORT = 3000

// ROTAS
app.use(express.json())
app.use('/user',userRoute)


// INICIALIZAÇÃO
app.listen(PORT, () =>
    console.log(`Servidor rodando em: http://localhost:${PORT}`)
)