import React from 'react';

import './chat.scss';

const Channel = ({ name, participants }) => {
  return (
    <div className="channel-item">
      <div>{name}</div>
      <span>{participants}</span>
    </div>
  );
};

export default Channel;
