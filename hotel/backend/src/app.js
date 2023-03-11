const express = require('express')
const cors = require('cors')

// Rotas
const router = require('./router')

const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({
 extended: true,
 })
);

app.use(cors())

app.use(express.static('public'))

// Rotas
const {adicionaisRouter} = require('./router')
const {acomodacoesRouter} = require('./router')
const {usuariosRouter} = require('./router')
app.use('/api/adicionais', adicionaisRouter)
app.use('/api/acomodacoes', acomodacoesRouter)
app.use('/api/usuarios', usuariosRouter)

module.exports = app