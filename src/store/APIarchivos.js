const http = require('http');
const response = require('../network/response')
const host = '192.168.100.29';
const port = '80';

exports.getAll = (TABLE, datos) =>{
    
    return new Promise((resolve,reject)=>{
        
        const path = `/${TABLE}/`
        let options = {
                    host: host,
                    port: port,
                    path: path,
                    method: 'GET',
                    encoding: null
                }
                
        const req = http.request(options, (res)=> {
            let data = ''
            let response = null
            res.on('data', function (chunk) {
                // Cada vez que se recojan datos se agregan a la variable
                data += chunk;
            }).on('end', function () {
             
                response = JSON.parse(data);
                //al terminar de recibir la informacion se resuleve la promesa con el resultado
                resolve(response)
                
            })
            .on('error', function(err) {
                // Si hay errores los sacamos por consola
                console.error('Error al procesar el mensaje: ' + err)
                reject(err)
            })
            .on('uncaughtException', function (err) {
                // Si hay alguna excepción no capturada la sacamos por consola
                console.error(err)
            })
        })
        if (datos) {
            req.write(datos)
        }
        req.end()
    })
}

exports.getOne = (TABLE, datos) =>{
    
    return new Promise((resolve,reject)=>{
        
        const path = `/${TABLE}/${datos}`
        let options = {
                    host: host,
                    port: port,
                    path: path,
                    method: 'GET',
                    encoding: null
                }
                
        const req = http.request(options, (res)=> {
            let data = ''
            let response = null
            res.on('data', function (chunk) {
                // Cada vez que se recojan datos se agregan a la variable
                data += chunk;
            }).on('end', function () {
             
                response = JSON.parse(data);
                //al terminar de recibir la informacion se resuleve la promesa con el resultado
                resolve(response)
                
            })
            .on('error', function(err) {
                // Si hay errores los sacamos por consola
                console.error('Error al procesar el mensaje: ' + err)
                reject(err)
            })
            .on('uncaughtException', function (err) {
                // Si hay alguna excepción no capturada la sacamos por consola
                console.error(err)
            })
        })
        req.end()
    })
}

exports.update = (TABLE, id, datos) =>{
    
    return new Promise((resolve,reject)=>{
        
        const path = `/${TABLE}/${id}`
        let options = {
                    host: host,
                    port: port,
                    path: path,
                    method: 'PATCH'
                }
                
        const req = http.request(options, (res)=> {
            let data = ''
            let response = null
            res.on('data', function (chunk) {
                // Cada vez que se recojan datos se agregan a la variable
                data += chunk;
            }).on('end', function () {
             
                response = JSON.parse(datos);
                //al terminar de recibir la informacion se resuleve la promesa con el resultado
                resolve(response)
                
            })
            .on('error', function(err) {
                // Si hay errores los sacamos por consola
                console.error('Error al procesar el mensaje: ' + err)
                reject(err)
            })
            .on('uncaughtException', function (err) {
                // Si hay alguna excepción no capturada la sacamos por consola
                console.error(err)
            })
        })
        if (datos) {
            req.write(datos)
        }
        req.end()
    })
}