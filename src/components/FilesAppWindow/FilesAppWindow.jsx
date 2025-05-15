import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import './FilesAppWindow.css';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react'; // Using lucide-react for icons

const FilesAppWindow = ({ title = 'Finder', initialPosition, zIndex, bringToFront, onClose, children }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [lastPosition, setLastPosition] = useState(initialPosition || { x: 150, y: 100 });
  const [lastSize, setLastSize] = useState({ width: 800, height: 500 });

  const handleMaximizeToggle = () => {
    if (isMaximized) {
      // Restore
      setIsMaximized(false);
    } else {
      // Maximize
      // We'd ideally get the parent dimensions here to truly maximize
      // For now, just a large fixed size or a class toggle will do
      setIsMaximized(true);
    }
    bringToFront(); // Bring to front when maximizing/restoring
  };

  const handleMinimize = () => {
    // Actual minimization to a dock is complex and out of scope for simple Rnd window
    // For now, we can simulate it by calling onClose or a dedicated minimize handler if provided
    console.log('Minimize clicked - placeholder');
    // if (onMinimize) onMinimize(); // Optional: if a specific minimize handler is passed
  };

  const rndRef = React.useRef(null);

  React.useEffect(() => {
    if (isMaximized && rndRef.current) {
      const parentBounds = rndRef.current.getParent().getBoundingClientRect();
      // Store current position and size before maximizing
      setLastPosition({ x: rndRef.current.draggable.state.x, y: rndRef.current.draggable.state.y });
      setLastSize({ width: rndRef.current.resizable.state.width, height: rndRef.current.resizable.state.height });

      rndRef.current.updatePosition({ x: 0, y: 0 }); // Adjust if menu bar/dock are not part of parent
      rndRef.current.updateSize({ width: parentBounds.width, height: parentBounds.height }); // Adjust for menu/dock
    } else if (!isMaximized && rndRef.current) {
      rndRef.current.updatePosition(lastPosition);
      rndRef.current.updateSize(lastSize);
    }
  }, [isMaximized, lastPosition, lastSize]);

  return (
    <Rnd
      ref={rndRef}
      size={isMaximized ? { width: '100%', height: '100%' } : lastSize}
      position={isMaximized ? { x: 0, y: 0 } : lastPosition}
      minWidth={350} // Modern Finder windows have a larger min width
      minHeight={250}
      bounds=".desktop-content-area" // Constrains dragging to the .desktop-content-area
      className={`files-app-window-modern ${isMaximized ? 'maximized' : ''}`}
      style={{ zIndex }}
      onDragStart={bringToFront}
      onResizeStart={bringToFront}
      onMouseDownCapture={bringToFront} // Capture phase to ensure it's brought to front before drag/resize
      dragHandleClassName="window-title-bar-modern"
      enableResizing={!isMaximized}
      onDragStop={(e, d) => { if (!isMaximized) setLastPosition({ x: d.x, y: d.y }); }}
      onResizeStop={(e, direction, ref, delta, position) => {
        if (!isMaximized) {
          setLastSize({ width: ref.style.width, height: ref.style.height });
          setLastPosition(position);
        }
      }}
    >
      <div className="window-title-bar-modern">
        <div className="window-controls-modern">
          <button className="window-control-modern close" onClick={onClose} title="Close">
            <X size={10} />
          </button>
          <button className="window-control-modern minimize" onClick={handleMinimize} title="Minimize">
            <Minus size={10} />
          </button>
          <button className="window-control-modern maximize" onClick={handleMaximizeToggle} title={isMaximized ? 'Restore' : 'Maximize'}>
            {isMaximized ? <Minimize2 size={10} /> : <Maximize2 size={10} />}
          </button>
        </div>
        <div className="window-title-modern">{title}</div>
      </div>
      <div className="window-content-modern">
        {children}
      </div>
    </Rnd>
  );
};

export default FilesAppWindow;

