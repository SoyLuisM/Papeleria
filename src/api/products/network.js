const express = require('express')

const response = require('../../network/response')
const controller = require("./index")

const router = express.Router()

router.get('/', list)

function list(req, res, next){
      controller.list()
            .then((lista) => {
                  response.success(req, res,lista,200)
            })
}

module.exports = router