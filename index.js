const express = require('express')
const os = require('os');

const app = express()
const { config } = require("./config")
const router = require('./src/network/routes');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//aquí se mandan a llamar las rutas existentes
router(app)

app.listen(config.port,() => {
      console.log(`Escuchando en http://localhost:${config.port}`)
})

//capura promesas no capturadas
process.on('unhandledRejection',error =>{
      // console.error('UnhandledRejection',error)
      console.error('unhandledRejection',error)
})
//captura excepciones no capturadas
process.on('uncaughtException',error =>{
      // console.error('UncaughtException',error)
      console.error('UncaughtException',error)
})

setInterval(alertMem,3000)

function alertMem(){
      free = os.freemem()
      total = os.totalmem()
      porcentaje = ((free/1024)*100)/(total/1024)
      if(porcentaje < 25){
            console.info(`memoria por debajo del ${porcentaje}%`)
      }
      else if(porcentaje<20){
            console.warn(`memoria por debajo del ${porcentaje}`)
      }
}