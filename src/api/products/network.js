const express = require('express')

const response = require('../../network/response')
const controller = require("./index")

const router = express.Router()

router.get('/', list)
router.post('/', insertProduct);

function list(req, res, next){
      controller.list()
            .then((lista) => {
                  response.success(req, res,lista,200)
            }).catch(next)
}
function insertProduct(req, res, next){
      controller.insertProduct(req.body,null)
            .then((data => {
                  response.success(req, res, data, 201)
            })).catch(next)
}
module.exports = router