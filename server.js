const express = require('express')
const routes = require('./routes')
var cors = require('cors')
const app = express()

app.use(cors())
app.use(routes)

app.listen(4564, () => { 
  console.log('server running at http://localhost:4564/')
})