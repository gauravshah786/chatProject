import React, { useCallback } from 'react';
import Channel from './Channel';

import './chat.scss';

const NO_CHANNEL = 'There are no channels to show';
const ChannelList = ({ channels, onSelectChannel }) => {
  const handleClick = useCallback(
    (id) => onSelectChannel(id),
    [onSelectChannel]
  );

  const list = !channels
    ? NO_CHANNEL
    : channels.map((c) => (
        <Channel
          key={c.id}
          id={c.id}
          name={c.name}
          participants={c.participants}
          onClick={handleClick}
        />
      ));

  return <div className="channel-list">{list}</div>;
};

export default ChannelList;
