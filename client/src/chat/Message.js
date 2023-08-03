import React from 'react';

import './chat.scss';

const Message = ({ senderName, text }) => {
  return (
    <div className="message-item">
      <div>
        <b>{senderName}</b>
      </div>
      <span>{text}</span>
    </div>
  );
};

export default Message;
