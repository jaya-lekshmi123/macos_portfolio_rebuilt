import React from 'react';
import './Desktop.css';
import MenuBar from '../MenuBar/MenuBar';
import Dock from '../Dock/Dock';

const Desktop = ({ children, desktopItems }) => {
  return (
    <div className="desktop-container">
      <MenuBar />
      <div className="desktop-content-area">
        {/* Desktop Icons */}
        {desktopItems && desktopItems.map((item, index) => (
          <div
            key={item.id}
            className="desktop-icon"
            onClick={item.action}
            title={item.name}
            // Basic positioning, can be made more dynamic later
            style={{ top: `${70 + (index * 100)}px`, left: '50px' }} 
          >
            <div className="desktop-icon-image">{item.icon}</div>
            <span className="desktop-icon-label">{item.name}</span>
          </div>
        ))}
        {/* App Windows will be rendered here via children */}
        {children}
      </div>
      <Dock />
    </div>
  );
};

export default Desktop;
