//side panel showing list of chatrooms (Cat Name | Foster Name)
import React from 'react';

const Channel = ({name, isSelected, onClick}) => {
  const className = isSelected ? "ChannelList-item ChannelList-item-selected" : "ChannelList-item";

  return (
    <div onClick={onClick} className={className}>{name}</div>
  )
};

const ChannelList =  ({channels, selectedChannelId, onSelect}) => (
  <div className="ChannelList">
    {
      channels.map(({id, name}) => {
        const is_selected = selectedChannelId === id;
        const onChannelSelect = () => onSelect(id)
        return <Channel key={id} name={name} isSelected={is_selected} onClick={onChannelSelect} />
      })
  }
  </div>
);

export default ChannelList;
