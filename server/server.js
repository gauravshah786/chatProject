const express = require('express');

const app = express();
const server = require('http').createServer(app);

const socketInitOptions = {
  cors: { origin: 'http://localhost:3000' },
};
const io = require('socket.io')(server, socketInitOptions);

const STATIC_CHANNELS = ['global_notifications', 'global_chat'];
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
  console.log('new client connected');
  socket.emit('connection', null);
});
