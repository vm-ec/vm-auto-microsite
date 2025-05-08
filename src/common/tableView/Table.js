import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiNinjasTable from './ApiNinjas'; // Import the new component
import './table.css';

const Table = ({ apiUrl, headers }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleRows, setVisibleRows] = useState(10); // Number of rows to display initially

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl, { headers });
      setData(response.data.Results || response.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiUrl) fetchData();
  }, [apiUrl, headers]);

  const handleLoadMore = () => {
    setVisibleRows((prev) => prev + 10); // Show 10 more rows
  };

  return (
    <div style={{ padding: '5px' }}>
      {loading ? (
        <p>Loading...</p>
      ) : apiUrl.includes('api-ninjas') ? (
        <ApiNinjasTable data={data} visibleRows={visibleRows} handleLoadMore={handleLoadMore} />
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                {apiUrl.includes('GetAllManufacturers') && <th>Manufacturer</th>}
              </tr>
            </thead>
            <tbody>
              {data.slice(0, visibleRows).map((item, index) => (
                <tr key={item.Make_ID || item.Mfr_ID || index}>
                  <td>{item.Make_ID || item.Mfr_ID || 'N/A'}</td>
                  <td>{item.Make_Name || item.Mfr_CommonName || 'N/A'}</td>
                  {apiUrl.includes('GetAllManufacturers') && <td>{item.Mfr_Name || 'N/A'}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          {visibleRows < data.length && (
            <button className="load-more-button" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Table;