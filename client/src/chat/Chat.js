import React from 'react';
import ChannelList from './ChannelList';
import MessagesPanel from './MessagesPanel';

import './chat.scss';

const channels = [{ id: 1, name: 'first', participants: 10 }];

const Chat = () => {
  return (
    <div className="chat-app">
      <ChannelList channels={channels} />
      <MessagesPanel />
    </div>
  );
};

export default Chat;
