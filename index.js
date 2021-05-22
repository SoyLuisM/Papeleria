const express = require('express')

const app = express()
const { config } = require("./config")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//aqui van las url

app.listen(config.port,() => {
      console.log(`Escuchando en http://localhost:${config.port}`)
})