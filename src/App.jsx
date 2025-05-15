import React, { useState, useEffect } from 'react';
import './App.css';
import Desktop from './components/Desktop/Desktop';
import FilesAppWindow from './components/FilesAppWindow/FilesAppWindow';
import Sidebar from './components/Sidebar/Sidebar';
import MyFilesView from './components/ContentViews/MyFilesView';
import ProjectsView from './components/ContentViews/ProjectsView';
import SkillsView from './components/ContentViews/SkillsView';
import DocumentsView from './components/ContentViews/DocumentsView';
import AboutMeView from './components/ContentViews/AboutMeView';
import RecentView from './components/ContentViews/RecentView';
import { FolderOpen } from 'lucide-react'; // Icon for the desktop item

function App() {
  const [isFilesAppOpen, setIsFilesAppOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('my_files'); // Default section
  const [windowZIndex, setWindowZIndex] = useState(100); // Initial z-index for the window

  const openFilesApp = () => {
    console.log("openFilesApp called");
    setIsFilesAppOpen(true);
    bringToFront(); // Bring to front when opened
  };

  const closeFilesApp = () => {
    setIsFilesAppOpen(false);
  };

  const bringToFront = () => {
    // This is a simplified z-index management. For multiple windows, a more robust system is needed.
    setWindowZIndex(prevZ => prevZ + 1); 
  };

  const desktopItems = [
    {
      id: 'portfolio_files',
      name: 'My Portfolio',
      icon: <FolderOpen size={48} color="white" strokeWidth={1.5} />,
      action: openFilesApp,
    },
    // Add other desktop items here if needed
  ];

  const renderActiveSection = (sectionId) => {
    console.log(`renderActiveSection called with: ${sectionId}`);
    switch (sectionId) {
      case 'my_files':
        return <MyFilesView />;
      case 'projects':
        return <ProjectsView />;
      case 'skills':
        return <SkillsView />;
      case 'documents':
        return <DocumentsView />;
      case 'about_me':
        return <AboutMeView />;
      case 'recent':
        return <RecentView />;
      default:
        return <MyFilesView />; // Fallback to My Files
    }
  };

  // Effect to apply a global class when the FilesAppWindow is open, e.g., for background blur or dimming
  useEffect(() => {
    if (isFilesAppOpen) {
      document.body.classList.add('files-app-active');
    } else {
      document.body.classList.remove('files-app-active');
    }
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('files-app-active');
    };
  }, [isFilesAppOpen]);

  return (
    <div className="app-container-modern">
      <Desktop desktopItems={desktopItems}>
        {isFilesAppOpen && (
          <FilesAppWindow
            title="Portfolio - Finder"
            initialPosition={{ x: 150, y: 100 }} // Example initial position
            zIndex={windowZIndex}
            bringToFront={bringToFront}
            onClose={closeFilesApp}
          >
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <div className="main-content-area-modern">
              {renderActiveSection(activeSection)}
            </div>
          </FilesAppWindow>
        )}
      </Desktop>
    </div>
  );
}

export default App;

