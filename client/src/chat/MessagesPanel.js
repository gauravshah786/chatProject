import React, { useState } from 'react';
import Message from './Message';

import './chat.scss';

const MessagesPanel = ({ channel, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const send = () => {
    if (inputValue.trim().length) {
      onSendMessage(channel.id, inputValue);
      setInputValue('');
    }
  };

  let list = (
    <div className="no-content-message">There is no message to show</div>
  );

  if (channel && channel.messages) {
    list = channel.messages.map((m) => (
      <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />
    ));
  }

  return (
    <div className="messages-panel">
      <div className="messages-list">{list}</div>
      {channel && (
        <div className="messages-input">
          <input type="text" onChange={handleInput} value={inputValue} />
          <button onClick={send}>Send</button>
        </div>
      )}
    </div>
  );
};

export default MessagesPanel;
