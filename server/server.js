const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:3000' },
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
  console.log('new client connected');
  socket.emit('connection', null);
});
