// IMPORTS
const express = require('express')
const userRoute = require('./src/routes/user.route')

// CONSTANTES
const app = express()
const PORT = 3000

// ROTAS
app.use(userRoute)


// INICIALIZAÇÃO
app.listen(PORT, () => {
    console.log(`Servidor aberto em: http://localhost:${PORT}`)
})