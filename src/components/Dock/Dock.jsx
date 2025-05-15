import React from 'react';
import './Dock.css';
import { Folder, Mail, MessageSquare, Music, Image, Trash2 } from 'lucide-react'; // Example icons

const Dock = () => {
  // Placeholder for dock items - these would typically be dynamic
  const dockItems = [
    { id: 'finder', name: 'Finder', icon: <Folder size={48} />, action: () => console.log('Finder clicked') },
    { id: 'mail', name: 'Mail', icon: <Mail size={48} />, action: () => console.log('Mail clicked') },
    { id: 'messages', name: 'Messages', icon: <MessageSquare size={48} />, action: () => console.log('Messages clicked') },
    { id: 'music', name: 'Music', icon: <Music size={48} />, action: () => console.log('Music clicked') },
    { id: 'photos', name: 'Photos', icon: <Image size={48} />, action: () => console.log('Photos clicked') },
    { id: 'trash', name: 'Trash', icon: <Trash2 size={48} />, action: () => console.log('Trash clicked') },
    // Add more apps as needed
  ];

  return (
    <div className="dock-container">
      <div className="dock-background">
        {dockItems.map(item => (
          <div key={item.id} className="dock-item" onClick={item.action} title={item.name}>
            {item.icon}
            <span className="dock-item-label">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dock;
