import React from 'react';

import './chat.scss';

const Channel = ({ name, participants, onClick, id }) => {
  return (
    <div className="channel-item" onClick={() => onClick(id)}>
      <div>{name}</div>
      <span>{participants}</span>
    </div>
  );
};

export default Channel;
