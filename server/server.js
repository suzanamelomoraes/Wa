const path = require('path')
const express = require('express')

const tasks = require('./routes/tasks')

const server = express()

server.use(express.json())
server.use('/api/v1/tasks', tasks)
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
