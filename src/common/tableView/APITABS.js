import React, { useState } from 'react';
import Table from './Table'; // Import the Table component
import './APITABS.css'; // Add CSS for layout and styling

const APITabs = () => {
  const [activeTab, setActiveTab] = useState('nhtsa'); // Default tab
  const [selectedAPI, setSelectedAPI] = useState(null); // Selected API from the sidebar
  const [headers, setHeaders] = useState({}); // Headers for API calls

  // Define tabs and their respective APIs
  const tabs = {
    nhtsa: [
      { name: 'Get All Makes', url: 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json' },
      { name: 'Get Makes for Manufacturer', url: 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2' },
    ],
    apiNinjas: [
        { name: 'Get Cars by Model (Camry)', url: 'https://api.api-ninjas.com/v1/cars?model=camry' },
      ],
  };
  const handleApiSelection = (api) => {
    setSelectedAPI(api.url);
    if (activeTab === 'apiNinjas') {
      setHeaders({
        'X-Api-Key': '/8Hkrnu0MLUnL97HFbe5dA==2EE54zkctqFiolxO',
      });
    } else {
      setHeaders({});
    }
  };
  return (
    <div className="api-tabs-container">
      {/* Tabs */}
      <div className="tabs">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(tab);
              setSelectedAPI(null); // Reset selected API when switching tabs
              setHeaders({}); 
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="contentTab">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>{activeTab.toUpperCase()} APIs</h3>
          <ul>
            {tabs[activeTab].map((api, index) => (
                <button
                  className={`api-button ${selectedAPI === api.url ? 'selected' : ''}`}
                  onClick={() => handleApiSelection(api)}
                >
                  {api.name}
                </button>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {selectedAPI ? (
            <Table apiUrl={selectedAPI} headers={headers} />
          ) : (
            <p>Select an API from the sidebar to view its data.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default APITabs;