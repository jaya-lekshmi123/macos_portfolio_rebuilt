import React from 'react';
import './MyFilesView.css';
import { Folder, FileText, Image as ImageIcon, Film, Music } from 'lucide-react'; // Example icons

const MyFilesView = () => {
  // Placeholder data for files and folders
  const items = [
    { id: 'folder1', name: 'Photo Albums', type: 'folder', icon: <Folder size={64} strokeWidth={1} />, itemsCount: 21 },
    { id: 'folder2', name: 'iTunes Files', type: 'folder', icon: <Folder size={64} strokeWidth={1} />, itemsCount: 12 },
    { id: 'folder3', name: 'Recently Deleted', type: 'folder', icon: <Folder size={64} strokeWidth={1} />, itemsCount: 18 },
    { id: 'folder4', name: 'Text Documents', type: 'folder', icon: <Folder size={64} strokeWidth={1} />, itemsCount: 24 },
    { id: 'image1', name: 'photo_31.12.20.jpg', type: 'image', icon: <ImageIcon size={64} strokeWidth={1} />, date: '01.01.2021' },
    { id: 'game1', name: 'Kira Wang - Game', type: 'image', icon: <ImageIcon size={64} strokeWidth={1} />, date: '16.03.2020' }, // Placeholder, could be a game asset
    { id: 'report1', name: 'March Report', type: 'document', icon: <FileText size={64} strokeWidth={1} />, date: '16.03.2020' },
    { id: 'invoice1', name: 'Invoice #00892', type: 'document', icon: <FileText size={64} strokeWidth={1} />, date: '16.03.2020' },
    { id: 'video1', name: 'Tokyo Trip', type: 'video', icon: <Film size={64} strokeWidth={1} />, date: '16.03.2020', duration: '23:15' },
    { id: 'journal1', name: 'Wanderer Journal', type: 'image', icon: <ImageIcon size={64} strokeWidth={1} />, date: '16.03.2020' },
    { id: 'doc1', name: 'Admission Confirmation', type: 'document', icon: <FileText size={64} strokeWidth={1} />, date: '16.03.2020' },
    { id: 'pass1', name: 'Boarding Pass', type: 'image', icon: <ImageIcon size={64} strokeWidth={1} />, date: '16.03.2020' },
    { id: 'music1', name: 'Tres Wood - Highlights', type: 'music', icon: <Music size={64} strokeWidth={1} />, date: '16.03.2020', duration: '2:08' },
  ];

  return (
    <div className="content-view-modern my-files-view">
      <div className="content-view-header">
        <h2>My Files</h2>
        {/* Add view controls like List/Icon toggle, Sort, etc. here if needed */}
      </div>
      <div className="files-grid-modern">
        {items.map(item => (
          <div key={item.id} className="file-item-modern" title={item.name}>
            <div className="file-icon-modern">
              {item.icon}
              {item.type === 'video' && <span className="video-duration-badge">{item.duration}</span>}
              {item.type === 'music' && <span className="music-duration-badge">{item.duration}</span>}
            </div>
            <span className="file-name-modern">{item.name}</span>
            {item.itemsCount && <span className="item-count-modern">{item.itemsCount} Items</span>}
            {item.date && !item.itemsCount && <span className="item-date-modern">{item.date}</span>}
          </div>
        ))}
      </div>
      {/* Floating action button if needed, like the reference image */}
      {/* <button className="floating-action-button-modern">
        <Plus size={24} />
      </button> */}
    </div>
  );
};

export default MyFilesView;

