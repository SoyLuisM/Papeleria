const mysql = require('mysql')

const { config } = require('../../config')

//saco los datos del archivo de configuracion
const dbconfig = {
      host: config.mysqlHost,
      user: config.mysqlUser,
      password: config.mysqlPassword,
      database: config.mysqlDataBase,
}
let connection

function handleCon(){
            //por defecto hace la coneccion con la bd al puerto 3306
      connection = mysql.createConnection(dbconfig)

      connection.connect((err) => {
            if (err){
                  console.error('[db err]', err)
                  setTimeout(handleCon, 2000)
            }
            else{
                  console.log('db conectada')
            }
      })

      connection.on('error', err => {
            console.error('[db err]', err)
            if(err.code==='PROTOCOL_CONNECTION_LOST'){
                  handleCon()
            }else{
                  throw err
            }
      })
}

handleCon()

function listAll(table){
      return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM ${table};`, (err, data) => {
                  if(err){
                        return reject(err)
                  }
                  resolve(data)
            })
      })
}

function create(table, data){
      return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO ${table} SET ?`, data,(err, result) => {
                  if(err){
                        return reject(err)
                  }
                  resolve(result)
            })
            
      })
}

function listOne(table, id){
      return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM ${table} WHERE id='${id}';`, (err, data) => {
                  if(err){
                        return reject(err)
                  }
                  resolve(data)
            })
            
      })
}

function update(table, data, id){
      return new Promise((resolve, reject) => {
            connection.query(`UPDATE ${table} SET ? WHERE id=?`, [data, id], (err, result) => {
                  if(err){
                        return reject(err)
                  }
                  resolve(result)
            })
            
      })
}
module.exports = {
      listAll,
      create,
      listOne,
      update,
}
