const express = require('express')
const route = express.Router()
const { receiveData } = require('./src/controller/receiveData')

route.get('/', receiveData)

module.exports = route