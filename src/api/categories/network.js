const express = require('express')

const response = require('../../network/response')
const controller = require("./index")

const router = express.Router()
//estos son los metodos existentes
router.get('/', list)
router.post('/', insertCategorie)

//a partir de aqui se implementan las funciones necesarias
function list(req, res, next){
    controller.list()
          .then((lista) => {
                response.success(req, res,lista,200)
          }).catch(next)
}
function insertCategorie(req, res, next){
    controller.insertProduct(req.body,null)
          .then((data => {
                response.success(req, res, data, 201)
          })).catch(next)
}
module.exports = router