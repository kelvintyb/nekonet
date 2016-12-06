//side panel showing list of chatrooms (Cat Name | Foster Name)
import React from 'react';

const Channel = ({name, isSelected}) => {
  const className = isSelected ? "ChannelList-item ChannelList-item-selected" : "ChannelList-item";

  return (
    <div className={className}>{name}</div>
  )
};

const ChannelList =  ({channels, selectedChannelId}) => (
  <div className="ChannelList">
    {
      channels.map(({id, name}) => {
        const is_selected = selectedChannelId === id;
        return <Channel key={id} name={name} isSelected={`${is_selected}`} />
      })
  }
  </div>
);

export default ChannelList;
