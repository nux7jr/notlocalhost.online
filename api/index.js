const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', function (req, res) {
  res.send('Test successful')
})
app.get('/create', function (req, res) {
  res.send('create')
})
app.post('/api/login', function (req, res) {
  req.body
  res.send('req.body')
})

export default {
  path: '/api',
  handler: app
}