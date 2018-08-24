module.exports = (io) => {

  // handle incoming connections from clients
  io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`)

    // emit RSSI value received from pi zero
    socket.on('rssi', (rssi) => {
      socket.broadcast.emit('forwardRssi', rssi)
    })

  })

}
