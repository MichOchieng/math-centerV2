
// Set up the server
const express = require('express')
const server = require('http').Server(app)
const io = require('socket.io')(server)
const PORT = process.env.PORT || 3000

server.listen(PORT)

io.on('connection', socket => {
    socket.emit("connected", "you did it")
    console.log(socket.id)
})