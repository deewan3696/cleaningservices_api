require('dotenv').config()
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const port = process.env.App_port
const router = require('./routes/index')

app.use(bodyparser.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})