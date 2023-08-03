import React, { useEffect } from 'react';
import './App.css';
import Chat from './chat/Chat';
import { socket } from './socket';

function App() {
  useEffect(() => {
    function onConnect() {
      console.log(`I'm connected with the back-end`);
    }

    function onDisconnect() {
      console.log(`I'm disconnected with the back-end`);
    }

    socket.on('connection', onConnect);
    socket.on('disconnection', onDisconnect);
    return () => {
      socket.off('connection', onConnect);
      socket.off('disconnection', onDisconnect);
    };
  }, []);

  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;
