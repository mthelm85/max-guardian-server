const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000

require('./socket.js')(io)

server.listen(port)
console.log(`Server running on port: ${port}`)
