import React from 'react';
import './MenuBar.css';

const MenuBar = () => {
  // Get current time for the menu bar
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="menu-bar-container">
      <div className="menu-bar-left">
        <span className="menu-item apple-logo"></span>
        <span className="menu-item app-name">Finder</span>
        <span className="menu-item">File</span>
        <span className="menu-item">Edit</span>
        <span className="menu-item">View</span>
        <span className="menu-item">Go</span>
        <span className="menu-item">Window</span>
        <span className="menu-item">Help</span>
      </div>
      <div className="menu-bar-right">
        {/* Placeholder for status icons like Wi-Fi, Battery, Control Center */}
        <span className="menu-item status-icon">📶</span> {/* Wi-Fi icon placeholder */}
        <span className="menu-item status-icon">🔋</span> {/* Battery icon placeholder */}
        <span className="menu-item status-icon">⚙️</span> {/* Control Center placeholder */}
        <span className="menu-item date-time">{new Date().toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })} {getCurrentTime()}</span>
      </div>
    </div>
  );
};

export default MenuBar;
