import React from 'react';
import './RecentView.css';
import { FileText, Image as ImageIcon, Folder, Clock } from 'lucide-react'; // Example icons

const RecentView = () => {
  // Placeholder data for recently accessed items
  const recentItems = [
    {
      id: 'recent1',
      name: 'My Resume (PDF)',
      type: 'PDF Document',
      icon: <FileText size={20} strokeWidth={1.5} />,
      lastAccessed: 'Today, 10:32 AM',
      path: 'Documents',
    },
    {
      id: 'recent2',
      name: 'Project Alpha - UI Mockups',
      type: 'Folder',
      icon: <Folder size={20} strokeWidth={1.5} />,
      lastAccessed: 'Today, 9:15 AM',
      path: 'Projects/Alpha',
    },
    {
      id: 'recent3',
      name: 'Client Meeting Notes.docx',
      type: 'Word Document',
      icon: <FileText size={20} strokeWidth={1.5} />,
      lastAccessed: 'Yesterday, 4:50 PM',
      path: 'Documents/Meetings',
    },
    {
      id: 'recent4',
      name: 'Company Logo Variations',
      type: 'Image File',
      icon: <ImageIcon size={20} strokeWidth={1.5} />,
      lastAccessed: 'Yesterday, 2:10 PM',
      path: 'My Files/Branding',
    },
    {
      id: 'recent5',
      name: 'Skills Assessment Checklist.pdf',
      type: 'PDF Document',
      icon: <FileText size={20} strokeWidth={1.5} />,
      lastAccessed: 'May 12, 2025, 11:00 AM',
      path: 'Skills',
    },
    // Add more recent items as needed
  ];

  return (
    <div className="content-view-modern recent-view-modern">
      <div className="content-view-header">
        <h2>Recent</h2>
        {/* Add filtering or grouping options here if needed */}
      </div>
      <div className="recent-files-list-modern">
        <div className="recent-files-list-header-modern">
          <div className="recent-header-name">Name</div>
          <div className="recent-header-accessed">Last Accessed</div>
          <div className="recent-header-path">Location</div>
        </div>
        {recentItems.map(item => (
          <div key={item.id} className="recent-file-item-modern" title={item.name}>
            <div className="recent-file-icon-name">
              <span className="recent-file-item-icon">{item.icon}</span>
              <span className="recent-file-item-name">{item.name}</span>
            </div>
            <div className="recent-file-item-accessed">{item.lastAccessed}</div>
            <div className="recent-file-item-path">{item.path}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentView;

