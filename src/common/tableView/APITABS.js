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
      { name: 'Get All Makes', url: 'https://vm-nhtsa.onrender.com/api/getAllMakes' },
      { name: 'Get Makes for Manufacturer', url: 'https://vm-nhtsa.onrender.com/api/getAllManufacturers' },
      { name: 'Get Makes for Vehicle', url: 'https://vm-nhtsa.onrender.com/api/getMakesForVehicle' },
      { name: 'Get WMIs For Manufacturer', url: 'https://vm-nhtsa.onrender.com/api/getWMIsForManufacturer/hon' },
    ],
    apiNinjas: [
      { name: 'Get Cars by Model (Camry)', url: 'https://api.api-ninjas.com/v1/cars?model=camry' },
    ],
    FIpe: [
      { name: 'Get Brands', url: '' },
      { name: 'Get Models', url: '' },
      { name: 'Get Years', url: '' },
    ],
    carMax: [], // Placeholder for carMax
    Kbb: [], // Placeholder for Kbb
    OEM: [], // Placeholder for OEM
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
    <div className="api-tabs">
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

        <div className="content">
          {/* Sidebar */}
          <div className="sidebar-container">
            {tabs[activeTab].length > 0 ? (
              <ul>
                {tabs[activeTab].map((api, index) => (
                  <button
                    key={index}
                   className={`api-button ${selectedAPI === api.url ? 'selected' : ''}`}
                    onClick={() => handleApiSelection(api)}
                  >
                    {api.name}
                  </button>
                ))}
              </ul>
            ) : (
              <p className="placeholder-sidebar">No APIs available for this tab.</p>
            )}
          </div>

          {/* Content Area */}
          <div className="content-area">
            {tabs[activeTab].length > 0 ? (
              selectedAPI ? (
                <Table apiUrl={selectedAPI} headers={headers} />
              ) : (
                <p>Select an API from the sidebar to view its data.</p>
              )
            ) : (
              <p className="placeholder">This tab is under development. Please check back later.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APITabs;