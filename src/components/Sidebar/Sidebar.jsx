import React from 'react';
import './Sidebar.css';
import { HardDrive, Folder, Star, Clock, FileText, User, Settings, PlusCircle } from 'lucide-react'; // Example icons

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sidebarSections = {
    favorites: [
      { id: 'my_files', name: 'My Files', icon: <HardDrive size={18} />, sectionType: 'favorites' },
      { id: 'recent', name: 'Recent', icon: <Clock size={18} />, sectionType: 'favorites' },
      // Add more favorites as needed
    ],
    icloud: [
      { id: 'projects', name: 'Projects', icon: <Folder size={18} />, sectionType: 'icloud' },
      { id: 'skills', name: 'Skills', icon: <Star size={18} />, sectionType: 'icloud' },
      { id: 'documents', name: 'Documents', icon: <FileText size={18} />, sectionType: 'icloud' },
      { id: 'about_me', name: 'About Me', icon: <User size={18} />, sectionType: 'icloud' },
    ],
    locations: [
      // Example: { id: 'macintosh_hd', name: 'Macintosh HD', icon: <HardDrive size={18} />, sectionType: 'locations' },
    ],
    tags: [
      // Example: { id: 'tag_red', name: 'Red', icon: <div className="tag-color-dot red" />, sectionType: 'tags' },
    ],
  };

  const renderSectionItems = (items) => {
    return items.map(item => (
      <div
        key={item.id}
        className={`sidebar-item ${activeSection === item.id ? 'active' : ''}`}
        onClick={() => setActiveSection(item.id)}
        title={item.name}
      >
        <span className="sidebar-item-icon">{item.icon}</span>
        <span className="sidebar-item-label">{item.name}</span>
      </div>
    ));
  };

  return (
    <div className="sidebar-modern-container">
      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Favorites</h3>
        {renderSectionItems(sidebarSections.favorites)}
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Portfolio</h3> {/* Changed from iCloud to Portfolio */}
        {renderSectionItems(sidebarSections.icloud)} {/* Reusing iCloud structure for Portfolio items */}
      </div>

      {/* Placeholder for other sections like Locations, Tags if needed */}
      {/* <div className="sidebar-section">
        <h3 className="sidebar-section-title">Locations</h3>
        {renderSectionItems(sidebarSections.locations)}
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-section-title">Tags</h3>
        {renderSectionItems(sidebarSections.tags)}
      </div> */}

      <div className="sidebar-footer">
        {/* Example: Add new folder or other actions */}
        {/* <button className="sidebar-footer-button">
          <PlusCircle size={16} />
          <span>New Folder</span>
        </button> */}
      </div>
    </div>
  );
};

export default Sidebar;

