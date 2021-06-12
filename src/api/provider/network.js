const express = require('express')

const response = require('../../network/response')
const controller = require("./index")

const router = express.Router()

//registro de rutas
router.get('/', list)
router.post('/', insertProvider)
router.patch('/:id', update)
router.get('/:id', listOne)

//implenetacion de funciones
function list(req, res, next){
      controller.list()
            .then((lista) => {
                  response.success(req, res,lista,200)
            }).catch(next)
}
function insertProvider(req, res, next){
      controller.insertProvider(req.body,null)
            .then((data => {
                  response.success(req, res, data, 201)
            })).catch(next)
}

function update(req, res, next){
      controller.update(req.params.id, req.body)
            .then((data => {
                  response.success(req, res, data, 201)
            })).catch(next)
}

function listOne(req, res, next){
      controller.listOne(req.params.id)
            .then((data => {
                  response.success(req, res, data, 201)
            })).catch(next)
}

module.exports = router