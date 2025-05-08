import React from 'react';

const ApiNinjasTable = ({ data, visibleRows, handleLoadMore }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Class</th>
            <th>Fuel Type</th>
            <th>City MPG</th>
            <th>Highway MPG</th>
            <th>Transmission</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visibleRows).map((item, index) => (
            <tr key={index}>
              <td>{item.make || 'N/A'}</td>
              <td>{item.model || 'N/A'}</td>
              <td>{item.year || 'N/A'}</td>
              <td>{item.class || 'N/A'}</td>
              <td>{item.fuel_type || 'N/A'}</td>
              <td>{item.city_mpg || 'N/A'}</td>
              <td>{item.highway_mpg || 'N/A'}</td>
              <td>{item.transmission || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleRows < data.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ApiNinjasTable;