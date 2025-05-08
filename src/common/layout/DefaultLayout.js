import React, { useState } from 'react';
import AppHeader from './Header';
import AppSidebar from './Sidebar';
import AppFooter from './Footer';
import AppContent from './MainBody';
import './Layout.css';

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="App">
      <AppHeader />
      <div className="main-container">
        {/* <AppSidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} /> */}
        <AppContent isSidebarExpanded={isSidebarExpanded} />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
