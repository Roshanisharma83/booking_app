const express = require('express')
const app = express()
require('dotenv').config()
const userRoute = require('./routes/user')
app.use(userRoute)
const port = process.env.PORT
app.use(express.json())
const connection = require('./db/connection')
const User = require('./models/user')
connection()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})