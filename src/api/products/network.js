const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', list)

function list(req, res, next){
      response.success(req, res,"todo bien :D",200)
}

module.exports = router