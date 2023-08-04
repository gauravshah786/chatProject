const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const server = require('http').createServer(app);
const socketInitOptions = {
  cors: { origin: 'http://localhost:3000' },
};
const io = require('socket.io')(server, socketInitOptions);

const STATIC_CHANNELS = [
  {
    name: 'Global chat',
    participants: 0,
    id: 1,
    sockets: [],
  },
  {
    name: 'Funny',
    participants: 0,
    id: 2,
    sockets: [],
  },
];

app.get('/getChannels', (req, res) => {
  res.json({
    channels: STATIC_CHANNELS,
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
  console.log('new client connected');
  socket.emit('connection', null);

  socket.on('channel-join', (id) => {
    STATIC_CHANNELS.forEach((c) => {
      if (c.id === id) {
        if (c.sockets.indexOf(socket.id) == -1) {
          c.sockets.push(socket.id);
          c.participants++;
          io.emit('channel', c);
        }
      } else {
        let index = c.sockets.indexOf(socket.id);
        if (index != -1) {
          c.sockets.splice(index, 1);
          c.participants--;
          io.emit('channel', c);
        }
      }
    });

    return id;
  });

  socket.on('send-message', (message) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    STATIC_CHANNELS.forEach((c) => {
      let index = c.sockets.indexOf(socket.id);
      if (index != -1) {
        c.sockets.splice(index, 1);
        c.participants--;
        io.emit('channel', c);
      }
    });
  });
});
