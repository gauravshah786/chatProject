import React from 'react';
import Channel from './Channel';

import './chat.scss';

const ChannelList = ({ channels }) => {
  let list = 'There are no channels to show';
  if (channels) {
    list = channels.map((c) => (
      <Channel
        key={c.id}
        id={c.id}
        name={c.name}
        participants={c.participants}
      />
    ));
  }
  return <div className="channel-list">{list}</div>;
};

export default ChannelList;
